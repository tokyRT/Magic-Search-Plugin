import { h } from "preact";
import styles from "./card.css";
import { TMagicCard } from "@/types";
import CheckIcon from "@/assets/check-icon";

interface ICardProps {
  magicCardId?: string;
  image: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function Card({
  magicCardId,
  image,
  selected,
  onClick,
}: ICardProps) {
  return (
    <div
      class={styles.card}
      onClick={() => onClick && onClick()}
    >
      <img src={image} class={styles.card_img} />
      {selected && (
        <div class={styles.card_overlay}>
          <CheckIcon />
        </div>
      )}
    </div>
  );
}
