import { h } from "preact";
import Card from "@/components/card/card";
import styles from "./card-list.css";
import { useEffect, useState } from "preact/hooks";
import { AddCardsHandler, TImageUris, TMagicCard } from "@/types";
import DownloadIcon from "@/assets/download-icon";
import { emit } from "@create-figma-plugin/utilities";
import { searchCards } from "@/api/magic-card-service";

interface ICardListProps {
  searchQuery: string;
}

export default function CardList({ searchQuery }: ICardListProps) {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const [magicCards, setMagicCards] = useState<TMagicCard[]>([]);
  const handleSelectCard = (cardId: number) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter((id) => id !== cardId));
    } else {
      setSelectedCards([...selectedCards, cardId]);
    }
  };

  const handleAddCards = () => {
    const cards = magicCards.filter((card) => selectedCards.includes(card.id));
    emit<AddCardsHandler>("ADD_CARDS", cards);
  };

  useEffect(() => {
    console.log("LIST searchQuery", searchQuery);
    if (searchQuery.length > 0) {
      console.log("encodeURI", encodeURI(searchQuery));

      searchCards(encodeURI(searchQuery)).then((cards) => {
        setMagicCards(cards);
      });
    }
  }, [searchQuery]);
  return (
    <div class={styles.list}>
      {magicCards.map((card) => (
        <Card
          key={card.id}
          image={card.faces.normal}
          selected={selectedCards.includes(card.id)}
          onClick={() => handleSelectCard(card.id)}
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
