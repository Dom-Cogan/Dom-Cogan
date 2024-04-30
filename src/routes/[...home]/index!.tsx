import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import PrimaryBtn from "../../components/buttons/primaryBtn";

export default component$(() => {
  return (
    <div class={base}>
      <h1 class={heading}>Hello & Welcome</h1>
      <p class={paragraph}>
        First off, thank you for visiting. My name is Dom Cogan, and this is my
        portfolio website. I did not attend college. In my spare time, I love
        learning new skills, I've taught myself Flutter, Qwik, Next.js, and CSS.
      </p>
      <div class={row}>
        <PrimaryBtn text="Blog" link="blog" />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Dom Cogan",
  meta: [
    {
      name: "Landing",
      content:
        "This is the landing page for the portfolio of Dom Cogan. He is a self taught pomputer programer. I taught myself Qwik, styleX, Flutter, Tailwind, Next.js and CSS",
    },
  ],
};

//Style Home index file
const base = ["mt-56", "flex", "items-center", "flex-col", "justify-center"];

const heading = [
  "flex",
  "justify-center",
  "items-center",
  "font-italic",
  "font-bold",
  "text-6xl",
  "cursor-default",
  "select-none",
];

const paragraph = [
  "flex",
  "cursor-default",
  "text-2xl",
  "px-20",
  "text-center",
  "items-center",
  "pb-4",
  "justify-center",
  "select-none",
];

const row = ["flex", "justify-center", "items-center", "select-none"];
