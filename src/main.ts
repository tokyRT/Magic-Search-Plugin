import { once, showUI } from "@create-figma-plugin/utilities";
import { AddCardsHandler, TMagicCard } from "./types";

export default function () {
  once<AddCardsHandler>("ADD_CARDS", (cards) => {
    const nodes: Array<SceneNode> = [];
    cards.forEach((card) => {

      figma.createImageAsync(card.faces.normal).then(async (image: Image) => {
        const node = figma.createRectangle();
        const { width, height } = await image.getSizeAsync();
        node.resize(width, height);
        node.fills = [
          {
            type: "IMAGE",
            imageHash: image.hash,
            scaleMode: "FILL",
          },
        ];
        node.name = card.name || "Magic Card";
        nodes.push(node);
        figma.currentPage.appendChild(node);
      });
      figma.currentPage.selection = nodes;
    });
  });

  showUI({
    height: 880,
    width: 550,
    title: "Magic Search",
  });
}
