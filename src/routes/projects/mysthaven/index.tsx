import { component$ } from "@builder.io/qwik";
import * as styles from "../../../styleY";
import Title from "~/components/page/sections/title";

export default component$(() => {
  return (
    <div class={styles.paper}>
      <Title text="Mysthaven" />
      <div class={styles.section}>
        <iframe
          src="https://mysthaven.readyplayer.me/avatar?frameApi=&id="
          width={"w-full"}
          height={"h-full"}
        ></iframe>
      </div>
    </div>
  );
});
