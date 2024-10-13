import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import * as styles from "../../../styleY";
import { getBlogDocument, getSectionDocument } from "~/config";
import Title from "../../../components/page/sections/title";
import Break from "~/components/page/sections/break";
import Loading from "~/components/loading";
import ImageItem from "~/components/page/sections/imageItem";

interface ImageSection {
  type: "image"; // Optional, in case there's a description
  imageURL: string[]; // This should be an array of image URLs
}

interface TextSection {
  type: "header" | "paragraph" | "break"; // Add other text types as needed
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
    const blog = await getBlogDocument(urlPath);
    console.log(blog); // This logs the raw blog data
    const postSectionList = blog.Pagesections.map(
      (section: any) => section.$id,
    );
    const sections = await Promise.all(
      postSectionList.map(async (sectionId: any) => {
        const sectionData = await getSectionDocument(sectionId);
        return {
          id: sectionData.$id,
          pageSections: sectionData.pageSections,
        };
      }),
    );

    blogPostStore.blogPost = {
      title: blog.title,
      sections,
    };

    // Log the full blog post
    console.log(blogPostStore.blogPost);
  });

  return (
    <div class={styles.paper}>
      {blogPostStore.blogPost ? (
        <>
          <Title text={blogPostStore.blogPost.title} />
          {blogPostStore.blogPost.sections.map((section) => (
            <div key={section.id} class={styles.section}>
              {section.pageSections.map((item, index) => (
                <div
                  key={item.type + index} // Use a combination of item type and index
                  class={[item.type === "header" ? styles.header : ""]}
                >
                  {item.type === "break" ? (
                    <Break />
                  ) : item.type === "image" ? (
                    (item as ImageSection).imageURL.map(
                      (url: string) => (
                        console.log(url),
                        (
                          <ImageItem
                            key={url}
                            altText="Image Item"
                            imageSrc={url}
                          />
                        )
                      ),
                    )
                  ) : (
                    item.content
                  )}
                </div>
              ))}
            </div>
          ))}
        </>
      ) : (
        <Loading message="blog" />
      )}
    </div>
  );
});
