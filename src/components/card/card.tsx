import { h } from "preact";
import styles from "./card.css";
import { TMagicCard } from "@/types";
import CheckIcon from "@/assets/check-icon";

interface ICardProps {
  magicCard: TMagicCard;
  selected?: boolean;
  onClick?: () => void;
}

export default function Card({
  magicCard,
  selected,
  onClick,
}: ICardProps) {
  return (
    <div
      class={styles.card}
      onClick={() => onClick && onClick()}
    >
      <img src={magicCard.img} class={styles.card_img} />
      {selected && (
        <div class={styles.card_overlay}>
          <CheckIcon />
        </div>
      )}
    </div>
  );
}
