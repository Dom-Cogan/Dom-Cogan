import { component$, useSignal } from "@builder.io/qwik";
import NavButton from "../buttons/navButton";
import Home from "~/icons/home";
import Blog from "~/icons/blog";

export default component$(() => {
  const account = useSignal(true);
  const sidemenu = [
    "w-1/5",
    "flex",
    "flex-col",
    "justify-center",
    account.value ? "max-w-[70px]" : "w-3/5",
  ];
  return (
    <div class={sidemenu}>
      <div>
        <NavButton willNav={true} icon={<Home />} />
        <NavButton willNav={true} icon={<Blog />} link="blog" />
        {/*
      <NavButton icon={<Website />} link="websites" />
      */}
      </div>
    </div>
  );
});
