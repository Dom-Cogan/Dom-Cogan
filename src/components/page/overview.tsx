import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

interface DetailProps {
  id: string;
  title: string;
  description: string;
  image?: any;
  bgColor?: string;
  txColor?: string;
  key: string;
}

export default component$<DetailProps>((props) => {
  const nav = useNavigate();

  // Styles for the details
  const background = [
    "p-2",
    "m-1",
    "flex",
    "flex-col",
    "max-w-sm",
    "cursor-pointer",
    props.bgColor ? props.bgColor : "bg-transparent",
    "hover:bg-bgSecondary",
    "box-border",
    "shadow-border",
  ];
  const title = [
    "flex",
    "m-1",
    "italic",
    "w-full",
    "text-2xl",
    "font-bold",
    "text-center",
    "select-none",
    "justify-center",
    props.txColor ? props.txColor : "text-txPrimary",
  ];
  const description = ["text-base", "mt-1", "select-none"];

  return (
    <div
      key={props.key}
      class={background}
      onClick$={() => nav("/blog/" + props.id)}
    >
      {props.image ? <div></div> : <></>}
      <div>
        <div class={title}>{props.title}</div>
        <div class={description}>{props.description}</div>
      </div>
    </div>
  );
});
