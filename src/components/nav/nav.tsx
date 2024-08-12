import { h } from "preact";
import { FunctionComponent } from "preact";
import styles from "./nav.css";
import MagicLogo from "@/assets/magic-logo.svg";
import HelpIcon from "@/assets/help-icon";
import DiceIcon from "@/assets/dice-icon";
import { useEffect, useRef, useState } from "preact/hooks";

interface INavProps {
  setSearchQuery: (query: string) => void;
}

export default function Nav({setSearchQuery} : INavProps){
  const [isFocued, setIsFocused] = useState<Boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const openSyntax = (e: Event) => {
    e.preventDefault();
    window.open("https://scryfall.com", "_blank");
  };

  const handleEnter = (e: KeyboardEvent) => {
    if(e.key === "Enter"){
      console.log("Enter", inputRef.current?.value);
      setSearchQuery(inputRef.current?.value || "");
      inputRef.current?.blur();
    }
  }
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={inputRef}
          onKeyDown={handleEnter}
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

