import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import * as styleY from "../styleY";
import Sidemenu from "~/components/columns/sidemenu";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  //Styles for the main layout of the website
  const leftcolumn = ["sm:hidden md:flex"];
  const container = ["flex", "w-4/5", "h-full", "m-4"];
  const sidemenu = [
    "w-1/5",
    "flex",
    "justify-end",
    "items-center",
    "sm:max-w-[70px]",
  ];
  return (
    <div class={styleY.rootPage}>
      <div class={[sidemenu, leftcolumn]}></div>
      <div class={container}>
        <div class={styleY.page}>
          <Slot />
        </div>
      </div>
      <Sidemenu />
    </div>
  );
});
