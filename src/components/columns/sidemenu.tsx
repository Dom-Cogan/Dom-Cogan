import { component$ } from "@builder.io/qwik";
import NavButton from "../buttons/navButton";
import Home from "~/icons/home";
import Blog from "~/icons/blog";

export default component$(() => {
  const sidemenu = [
    "w-1/5",
    "flex",
    "flex-col",
    "justify-center",
    "max-w-[70px]",
  ];
  return (
    <div class={sidemenu}>
      <NavButton icon={<Home />} />
      <NavButton icon={<Blog />} link="blog" />
      {/*
      <NavButton icon={<Website />} link="websites" />
      */}
    </div>
  );
});
