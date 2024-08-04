import { h } from "preact";
import { FunctionComponent } from "preact";
import styles from "./nav.css";
import MagicLogo from "@/assets/magic-logo.svg";
import HelpIcon from "@/assets/help-icon";
import DiceIcon from "@/assets/dice-icon";
import { useState } from "preact/hooks";

const Nav: FunctionComponent = () => {
  const [isFocued, setIsFocused] = useState<Boolean>(false);
  const openSyntax = (e: Event) => {
    e.preventDefault();
    window.open("https://scryfall.com", "_blank");
  };
  return (
    <nav class={styles.nav}>
      <div
        class={`${styles.nav_inner} ${isFocued ? styles.nav_innerFocused : ""}`}
      >
        <img src={MagicLogo} />
        <input
          class={styles.nav_inner_input}
          type="text"
          placeholder="Search for Magic Cards"
          autoFocus
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div class={styles.nav_inner_buttonGroup}>
          <a href="#" onClick={openSyntax}>
            <HelpIcon />
            Syntax
          </a>
          <a href="#">
            <DiceIcon />I feel lucky
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
