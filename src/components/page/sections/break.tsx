import { component$ } from "@builder.io/qwik";
/* This component is resposable for every break in a blog post or product description  */

export default component$(() => {
  const breakSpace = ["m-4", "h-1", "rounded", "bg-LIGHT-txSecondary"];

  return <div class={breakSpace}></div>;
});
