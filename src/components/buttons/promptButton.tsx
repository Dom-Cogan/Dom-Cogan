import { component$, useStore, $ } from "@builder.io/qwik";
import { updateItemDoc } from "~/config";
import ImageItem from "../page/sections/imageItem";

interface PromptProps {
  sectionId: string;
  itemId: string;
  type: string;
  currentContent?: string;
  onClicked: () => void; // Keep the correct type
}

export default component$<PromptProps>((props) => {
  const state = useStore({
    content: props.currentContent || "",
  });

  const handleClick = $((props: any) => {
    let newContent;

    if (props.type === "image") {
      // Prompt only if the content is empty or the user clicks the image
      if (
        !state.content ||
        confirm("No image URL found. Would you like to enter a new URL?")
      ) {
        newContent = prompt("Enter the image URL:", state.content || "");

        if (newContent) {
          state.content = newContent; // Update the state with the new content
          console.log("Updated image URL:", state.content); // Log updated URL
        } else {
          alert("Please enter a valid image URL.");
          return;
        }
      }
    }

    console.log("Current content before update:", state.content); // Log current content before update

    if (state.content) {
      console.log("Updating item with params:", {
        sectionId: props.sectionId,
        itemId: props.itemId,
        type: props.type,
        newContent: state.content,
      });

      // Update the item document with the new content
      updateItemDoc(props.sectionId, props.itemId, props.type, [state.content]);

      // Call the onClicked function to notify the parent
      props.onClicked(); // Invoke directly
    }
  });

  return (
    <div>
      {props.type === "image" ? (
        <ImageItem
          imageSrc={state.content || ""}
          altText="Image Description"
          onClick$={$(() => handleClick)} // Trigger handleClick on image click
        />
      ) : (
        <div onClick$={$(() => handleClick)}>
          {state.content || "Click to enter content"}
        </div>
      )}
    </div>
  );
});
