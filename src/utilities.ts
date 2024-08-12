import { getSelectedNodesOrAllNodes } from "@create-figma-plugin/utilities";

export const addNodeToFigma = (node: SceneNode) => {
  const selectedLayers: SceneNode[] = getSelectedNodesOrAllNodes();
  if(selectedLayers.length === 1 && (selectedLayers[0].type === "FRAME" || selectedLayers[0].type === "GROUP")) {
    selectedLayers[0].appendChild(node);
    return;
  }
  // add to current page, if no frame or group is selected. In center
  node.x = figma.viewport.center.x - node.width / 2;
  node.y = figma.viewport.center.y - node.height / 2;
  figma.currentPage.appendChild(node);
};
