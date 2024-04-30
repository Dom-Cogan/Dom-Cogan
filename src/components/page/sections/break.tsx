import { component$ } from "@builder.io/qwik";
import * as styles from "../../../styleY";
/* This component is resposable for every break in a blog post or product description  */

export default component$(() => {
  return (
    <div class={["flex", "justify-center"]}>
      <div class={styles.breakSpace}></div>;
    </div>
  );
});
