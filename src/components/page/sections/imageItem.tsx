import { component$ } from "@builder.io/qwik";
import placeholderImage from "/src/Images/ImageImg.png";

interface ImageProps {
  imageSrc?: string; // Property for image source
  altText: string; // Property for image alt text
}

export default component$<ImageProps>((props) => {
  const imgWidth = 800; // Use actual width of your images
  const imgHeight = 600; // Use actual height of your images

  // Styles for the image
  const containerClasses = [
    "m-4",
    "p-2",
    "text-center",
    "shadow-border",
    "90%", // Ensure the image takes the full width of its container
  ].join(" ");

  return (
    <div class={containerClasses}>
      <img
        src={props.imageSrc ? props.imageSrc : placeholderImage}
        alt={props.altText}
        width={imgWidth} // Maintain actual width
        height={imgHeight} // Maintain actual height
        style={{ objectFit: "cover", maxWidth: "100%", height: "auto" }} // Keep aspect ratio and allow responsiveness
      />
    </div>
  );
});
