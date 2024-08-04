import { render } from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { useEffect } from "preact/hooks";
import styled from 'styled-components';



function Plugin() {
  return (
    <App>
      <h1>Magic Search plugin</h1>
    </App>
  );
}
export default render(Plugin);

const App = styled.div`
  background-color: white;
  color: black;
  height: 100%;
`;