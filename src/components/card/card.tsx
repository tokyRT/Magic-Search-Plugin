import { h } from "preact";
import styles from "./card.css";
import { MagicCard } from "@/types";

interface CardProps {
  magicCard: MagicCard;
}

export default function Card({ magicCard }: CardProps){
  return (
    <div class={styles.card}>
      <img src={magicCard.img} class={styles.card_img}/>
    </div>
  );
};
