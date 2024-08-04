import { h } from "preact";
import Card from "@/components/card/card";
import styles from "./card-list.css";
import { useEffect, useState } from "preact/hooks";
import { AddCardsHandler, TMagicCard } from "@/types";
import DownloadIcon from "@/assets/download-icon";
import { emit } from "@create-figma-plugin/utilities";

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
  };

  const handleAddCards = () => {
    const cards = magicCards.filter((card) => selectedCards.includes(card.id))
    emit<AddCardsHandler>('ADD_CARDS', cards)
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
      {selectedCards.length > 0 && (
        <div class={styles.list_button} onClick={handleAddCards}>
          <DownloadIcon />
          <span>
            Import {selectedCards.length}
            {selectedCards.length > 1 ? " Images" : " Image"}
          </span>
        </div>
      )}
    </div>
  );
}
