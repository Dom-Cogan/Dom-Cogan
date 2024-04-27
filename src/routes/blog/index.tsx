import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { listAllBlog } from "~/config";
import Overview from "~/components/page/overview";

interface BlogPost {
  id: string;
  title: string;
  overview: string;
}

export default component$(() => {
  const blogPostsStore = useStore<{ blogPosts: BlogPost[] }>({
    blogPosts: [],
  });

  useVisibleTask$(async () => {
    try {
      const response = await listAllBlog();
      const blogPosts = response?.documents.map((doc) => ({
        id: doc.$id,
        title: doc.title,
        overview: doc.overview,
      }));
      blogPostsStore.blogPosts = blogPosts ?? [];
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div>
      {blogPostsStore.blogPosts.map((post) => (
        <Overview
          key={post.id}
          title={post.title}
          id={post.id}
          description={post.overview}
        />
      ))}
    </div>
  );
});

export const head: DocumentHead = {
  meta: [
    {
      name: "Blog",
      content: "These are the blogs that I have uploaded",
    },
  ],
};
