import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { listAllBlog } from "~/config";
import Overview from "~/components/page/overview";
import { type Models } from "appwrite";

interface BlogPost {
  id: string;
  title: string;
  overview: string;
}

export default component$(() => {
  const blogPostsStore = useStore<{ blogPosts: BlogPost[] }>({
    blogPosts: [],
  });

  useTask$(async () => {
    try {
      const response = await listAllBlog();
      const blogPosts: BlogPost[] = response.documents.map(
        (doc: Models.Document) => ({
          id: doc.$id,
          title: doc.title,
          overview: doc.overview,
        }),
      );
      blogPostsStore.blogPosts = blogPosts;
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div>
      {blogPostsStore.blogPosts.length > 0 ? (
        blogPostsStore.blogPosts.map((post) => (
          <Overview
            key={post.id}
            title={post.title}
            id={post.id}
            description={post.overview}
          />
        ))
      ) : (
        <p>Loading blog posts...</p>
      )}
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
