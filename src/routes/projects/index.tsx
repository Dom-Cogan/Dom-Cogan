import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>Interesting that you found this.... What are you looking for?</div>
  );
});

export const head: DocumentHead = {
  meta: [
    {
      name: "Projects",
      content: "These are the Projects that I'm working on",
    },
  ],
};
