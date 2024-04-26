import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import * as styles from "../../styleY";

export default component$(() => {
  return (
    <>
      <div class={styles.construction}>Site Under Construction</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Dom Cogan Portfolio",
  meta: [
    {
      name: "description",
      content: "This is the portfolio website made in Qwik for Dom-Cogan",
    },
  ],
};
