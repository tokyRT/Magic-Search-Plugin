import { once, showUI } from "@create-figma-plugin/utilities";
import { AddCardsHandler, TMagicCard } from "./types";
import { addNodeToFigma } from "./utilities";

export default function () {
  once<AddCardsHandler>("ADD_CARDS", async (cards) => {
    const imagePromises: Promise<SceneNode>[] = cards.map(async (card) => {
      const image: Image = await figma.createImageAsync(card.faces.png);
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
      return node;
    });

    const imageNodes = await Promise.all(imagePromises);
    if (imageNodes.length > 1) {
      // if multiple images, create a frame to hold them
      const layoutNode = figma.createFrame();
      imageNodes.forEach((node) => {
        layoutNode.appendChild(node);
      });
      layoutNode.name = "Magic Cards";
      // apply auto layout
      layoutNode.layoutMode = "HORIZONTAL";
      layoutNode.counterAxisSizingMode = "AUTO";
      layoutNode.itemSpacing = 20;
      layoutNode.fills = [];

      addNodeToFigma(layoutNode);
      figma.currentPage.selection = [layoutNode];
    } else {
      addNodeToFigma(imageNodes[0]);
      figma.currentPage.selection = imageNodes;
    }

    figma.closePlugin();
  });

  showUI({
    height: 880,
    width: 550,
    title: "Magic Search",
  });
}
