import { h } from "preact";
import Card from "@/components/card/card";
import styles from "./card-list.css";
import { useState } from "preact/hooks";
import { TMagicCard } from "@/types";

export default function CardList() {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const magicCards = Array.from({ length: 10 }).map((_, index) => ({
    id: `${index}`,
    img: "https://cards.scryfall.io/normal/front/f/e/fecbf0a3-ebe1-43b6-a720-462ba19002eb.jpg?1591227985",
  }));
  const handleSelectCard = (card: TMagicCard) => {
    if (selectedCards.includes(card.id)) {
      setSelectedCards(selectedCards.filter((id) => id !== card.id));
    } else {
      setSelectedCards([...selectedCards, card.id]);
    }
  }
  return (
    <div class={styles.list}>
      {magicCards.map((card, index) => (
        <Card
          key={index}
          magicCard={card}
          selected={selectedCards.includes(card.id)}
          onClick={() => handleSelectCard(card)}
        />
      ))}
    </div>
  );
}
