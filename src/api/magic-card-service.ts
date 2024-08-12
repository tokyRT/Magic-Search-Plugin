import { TMagicCard } from "@/types";

const SCRYFALL_API = "https://api.scryfall.com";

export const searchCards = async (query: string): Promise<TMagicCard[]> => {
  const cards: TMagicCard[] = [];
  const response = await fetch(`${SCRYFALL_API}/cards/search?q=${query}`);
  if(response.status !== 200) return cards;

  const data = await response.json();
  let i = 0;
  for (const card of data.data) {
    if(card.image_uris) {
      cards.push({
        id: i,
        scryfallId: card.id,
        name: card.name,
        faces: {
          normal: card.image_uris.normal,
          png: card.image_uris.png,
        }
      });
      i++;
      continue;
    }
    if(card.card_faces && card.card_faces[0].image_uris) {
      for (const face of card.card_faces) {
        cards.push({
          id: i,
          scryfallId: card.id,
          name: card.name,
          faces: {
            normal: face.image_uris.normal,
            png: face.image_uris.png,
          }
        });
        i++;
      }
    }
  }

  return cards;
};
