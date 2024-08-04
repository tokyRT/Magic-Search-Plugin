import { render } from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { useEffect } from "preact/hooks";
import styles from "./styles/global.css";
import MagicIconWhite from "./assets/magic-icon-white.svg";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import CardList from "./components/card-list/card-list";

function Plugin() {
  return (
    <div class={styles.app}>
      <Nav />
      <img src={MagicIconWhite} class={styles.imgBackground} />
      <div class={styles.body}>
        <CardList />
      </div>
      <Footer />
    </div>
  );
}
export default render(Plugin);
