import { component$ } from "@builder.io/qwik";

interface buttonProps {
  imageSrc: string; // Property for image source
  altText: string; // Property for image alt text
  onClicked?: () => Promise<void>; // Optional click handler
}

export default component$<buttonProps>((props) => {
  // Styles for the button
  const container = [
    "mx-4",
    "cursor-pointer",
    "border-box",
    // Hover Effects
    "hover:bg-bgSecondary",
  ];

  return (
    <div
      class={container}
      style={{ width: "100px", height: "50px" }}
      onClick$={props.onClicked} // Pass the handler directly
    >
      <img
        src={props.imageSrc}
        alt={props.altText}
        height={"100"}
        width={"100"}
      />
    </div>
  );
});
