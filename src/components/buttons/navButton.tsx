import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

interface buttonProps {
  icon: any;
  link?: string;
}

export default component$<buttonProps>((props) => {
  const nav = useNavigate();

  //Styles for the nav buttons
  const container = [
    "m-3",
    "flex",
    "rounded",
    "border-4",
    "items-center",
    "border-LIGHT-txtPrimary",
    "justify-center",

    //Hover Effects
    "hover:bg-bgSecondary",
  ];

  return (
    <div
      class={container}
      onClick$={() => {
        {
          props.link ? nav("/" + props.link) : nav("/");
        }
      }}
    >
      {props.icon}
    </div>
  );
});
