import { createGlobalStyle } from "styled-components";
import Paths from "./routes/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Paths />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  caret-color: transparent;
}
code {
  font-family:'Amatic SC','Open Sans' cursive,
}
::-webkit-scrollbar {
  width: 0px;
  background-color: transparent;
} 
`;
