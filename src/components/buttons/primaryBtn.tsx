import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

interface buttonProps {
  text: string;
  link?: string;
}

export default component$<buttonProps>((props) => {
  const nav = useNavigate();

  //Styles for the buttons
  const container = [
    "mx-4",
    "pt-4",
    "pb-4",
    "px-12",
    "text-2xl",
    "shadow-border",
    "cursor-pointer",
    "border-box",

    //Hover Effects
    "hover:bg-hover",
  ];

  return (
    <div
      class={container}
      onClick$={() => {
        {
          props.link ? nav("/" + props.link) : nav("/" + props.text);
        }
      }}
    >
      {props.text}
    </div>
  );
});
