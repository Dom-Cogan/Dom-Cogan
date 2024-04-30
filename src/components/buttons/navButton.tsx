import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import * as styles from "../../styleY";

interface buttonProps {
  icon: any;
  link?: string;
  willNav?: boolean;
}

export default component$<buttonProps>((props) => {
  const nav = useNavigate();
  return (
    <div
      class={styles.navBtn}
      onClick$={() => {
        {
          props.willNav
            ? props.link
              ? nav("/" + props.link)
              : nav("/")
            : console.log("Navigation: " + props.willNav);
        }
      }}
    >
      {props.icon}
    </div>
  );
});
