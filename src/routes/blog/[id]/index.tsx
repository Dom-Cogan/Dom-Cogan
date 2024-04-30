import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import * as styles from "../../../styleY";
import { getBlogDocument, getSectionDocument } from "../../../config/database";
import Title from "../../../components/page/sections/title";
import Break from "~/components/page/sections/break";
import Loading from "~/components/loading";
interface Section {
  id: string;
  pageSections: { type: string; content: string }[];
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

  useVisibleTask$(async () => {
    const blog = await getBlogDocument(urlPath);
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
  });

  return (
    <div class={styles.paper}>
      {blogPostStore.blogPost ? (
        <>
          <Title text={blogPostStore.blogPost.title} />
          {blogPostStore.blogPost.sections.map((section) => (
            <div key={section.id} class={styles.section}>
              {section.pageSections.map((item) => (
                <div
                  key={item.type}
                  class={[item.type === "header" ? styles.header : ""]}
                >
                  {item.type === "break" ? <Break /> : item.content}
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
