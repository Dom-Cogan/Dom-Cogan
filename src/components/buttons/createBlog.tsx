import { component$ } from "@builder.io/qwik";

interface ButtonProps {
  text: string;
  onClick: () => Promise<void>; // Correct prop name to onClick
  disabled?: boolean; // Optional disabled prop
}

export default component$<ButtonProps>((props) => {
  const container = [
    "m-4",
    "text-center",
    "pt-4",
    "pb-4",
    "px-12",
    "text-2xl",
    "shadow-border",
    "cursor-pointer",
    "border-box",
    "hover:bg-bgSecondary",
    props.disabled ? "hover:bg-bgPrimary pointer-events-none" : "", // Disable styles
  ]
    .filter(Boolean)
    .join(" "); // Filter out any empty strings

  return (
    <div
      class={container}
      onClick$={props.disabled ? undefined : props.onClick} // Prevent click if disabled
    >
      {props.text}
    </div>
  );
});
