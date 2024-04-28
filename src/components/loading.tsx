import { component$ } from "@builder.io/qwik";
import * as styles from "../styleY";

interface loadingProps {
  message: string;
}
export default component$<loadingProps>((props) => {
  return <div class={styles.loading}>Loading {props.message}...</div>;
});
