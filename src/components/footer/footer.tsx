import { h } from "preact";
import { FunctionComponent } from "preact";
import styles from "./footer.css"

const Footer: FunctionComponent = () => {
  return (
    <div class={styles.footer}>
      <p>You can use the Scryfall syntax to search for cards.</p>
    </div>
  );
};
export default Footer;
