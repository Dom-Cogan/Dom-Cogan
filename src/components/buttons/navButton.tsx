import { $, component$, useStore } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import * as styles from "../../styleY";

interface buttonProps {
  icon: any;
  link?: string;
  url?: boolean;
}

export default component$<buttonProps>((props) => {
  const nav = useNavigate();

  const store = useStore({
    url: "https://accounts.domcogan.app",
  });

  const getUser = $(() => {
    const baseUrl = "https://accounts.domcogan.app";
    const signedInUrl = `${baseUrl}/user`;

    return window.open(signedInUrl, "_self");
  });

  //Styles for the nav buttons

  return (
    <div
      class={styles.navBtn}
      onClick$={() => {
        {
          props.url ? getUser() : props.link ? nav("/" + props.link) : nav("/");
        }
      }}
    >
      {props.icon}
    </div>
  );
});
