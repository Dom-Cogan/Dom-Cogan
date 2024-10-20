import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import * as styles from "../../../styleY";
import { getBlogDocument, getSectionDocument, getItemDocument } from "~/config";
import Title from "../../../components/page/sections/title";
import Break from "~/components/page/sections/break";
import Loading from "~/components/loading";
import ImageItem from "~/components/page/sections/imageItem";

interface ImageSection {
  type: "image";
  imageURL: string[];
}

interface TextSection {
  type: "header" | "paragraph" | "break";
  content: string;
}

type PageSection = ImageSection | TextSection;

interface Section {
  id: string;
  pageSections: PageSection[];
}

interface BlogPost {
  title: string;
  sections: Section[];
}

export default component$(() => {
  const loc = useLocation();
  const urlPath = loc.params.id;

  const blogPostStore = useStore<{ blogPost: BlogPost | null }>({
    blogPost: null,
  });

  useTask$(async () => {
    try {
      const blog = await getBlogDocument(urlPath);
      const postSectionList = blog.Pagesections.map(
        (sectionId: string) => sectionId,
      );

      const sections = await Promise.all(
        postSectionList.map(async (sectionId: string) => {
          try {
            const sectionData = await getSectionDocument(sectionId);
            const pageSections: PageSection[] = await Promise.all(
              sectionData.pageSections.map(async (itemId: string) => {
                const itemDoc = await getItemDocument(itemId); // Fetch the item document
                if (itemDoc.type === "image") {
                  return {
                    type: "image",
                    imageURL: itemDoc.imageURL || [],
                  } as ImageSection;
                } else if (
                  ["header", "paragraph", "break"].includes(itemDoc.type)
                ) {
                  return {
                    type: itemDoc.type,
                    content: itemDoc.content || "",
                  } as TextSection;
                }
                throw new Error(`Unknown item type: ${itemDoc.type}`);
              }),
            );

            return {
              id: sectionData.$id,
              pageSections: pageSections,
            };
          } catch (error) {
            console.error(`Error fetching section ${sectionId}:`, error);
            return null; // Handle the error appropriately
          }
        }),
      );

      // Filter out any null sections in case of errors
      blogPostStore.blogPost = {
        title: blog.title,
        sections: sections.filter(Boolean) as Section[],
      };

      // Log the full blog post
      console.log(blogPostStore.blogPost);
    } catch (error) {
      console.error("Error fetching blog document:", error);
    }
  });

  return (
    <div class={styles.paper}>
      {blogPostStore.blogPost ? (
        <>
          <Title text={blogPostStore.blogPost.title} />
          {blogPostStore.blogPost.sections.map((section) => (
            <div key={section.id} class={styles.section}>
              {section.pageSections.map((item, index) => {
                const { type } = item; // Extract type for better readability
                return (
                  <div
                    key={type + index}
                    class={[type === "header" ? styles.header : ""]}
                  >
                    {type === "break" ? (
                      <Break />
                    ) : type === "image" ? (
                      (item as ImageSection).imageURL.map((url: string) => (
                        <ImageItem
                          key={url}
                          altText="Image Item"
                          imageSrc={url}
                        />
                      ))
                    ) : (
                      item.content // Assumes item has content for header and paragraph
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </>
      ) : (
        <Loading message="Loading blog..." />
      )}
    </div>
  );
});
