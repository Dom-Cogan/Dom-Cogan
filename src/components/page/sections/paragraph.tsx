import { component$ } from "@builder.io/qwik";
import Title from "./title";

/* This component is resposable for the paragraph sections in a blog post or product description  */

interface paragraphProps {
  heading?: string;
  body: any;
}
export default component$<paragraphProps>((props) => {
  const section = ["m-4", "p-4", "text-lg", "shadow-border"];

  return (
    <div key={1} class={section}>
      {/* Header Section */}
      {props.heading ? <Title text={props.heading} heading={true} /> : <></>}
      {props.body}
    </div>
  );
});
