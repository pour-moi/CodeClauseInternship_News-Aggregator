import { SearchBar } from "./components/Search";
import { createGlobalStyle } from "styled-components";
import { NavBar } from "./components/NavBar";
import { HeaderNews } from "./components/HeaderNews";
import { News } from "./components/News";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <SearchBar />
      <NavBar />
      <HeaderNews />
      <News />
    </>
  );
}

export default App;
