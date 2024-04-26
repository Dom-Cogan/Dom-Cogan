import { component$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
export default component$(() => {
  const loc = useLocation();
  const blogId = loc.params.id;
  return (
    <>
      <div>Single blog post </div>
      <div>{blogId}</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
