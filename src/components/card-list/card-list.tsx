import { h } from "preact";
import Card from "@/components/card/card";
import styles from "./card-list.css";

export default function CardList() {
  return (
    <div class={styles.list}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Card
          key={index}
          magicCard={{
            img: "https://cards.scryfall.io/normal/front/f/e/fecbf0a3-ebe1-43b6-a720-462ba19002eb.jpg?1591227985",
          }}
        />
      ))}
    </div>
  );
}
