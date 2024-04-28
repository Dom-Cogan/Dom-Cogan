import { component$ } from "@builder.io/qwik";

/* This component is resposable for every Title section on a blog post or product description  */
interface sectionProps {
  text: string;
  heading?: boolean;
}

export default component$<sectionProps>((props) => {
  const title = [
    "m-4",
    "p-2",
    "text-5xl",
    "bold",
    "italic",
    "text-center",
    "shadow-border",
  ];
  const heading = [
    "m-4",
    "font-semibold",
    "text-2xl",
    "italic",
    "text-align: center",
    "text-center",
  ];

  return props.heading ? (
    <div class={heading}>{props.text}</div>
  ) : (
    <div class={title}>{props.text}</div>
  );
});
