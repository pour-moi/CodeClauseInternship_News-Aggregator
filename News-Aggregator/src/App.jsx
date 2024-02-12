import styled from "styled-components";
import { SearchBar } from "./components/Search";
import { createGlobalStyle } from "styled-components";
import { NavBar } from "./components/NavBar";
import { HeaderNews } from "./components/HeaderNews";
import { News } from "./components/News";
import { RightSideNews } from "./components/Rnews";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const StyledNewsView = styled.div`
  display: flex;
  justify-content: space-around;
s`;

function App() {
  return (
    <>
      <GlobalStyle />
      <SearchBar />
      <NavBar />
      <HeaderNews />
      <StyledNewsView>
        <News />
        <RightSideNews />
      </StyledNewsView>
    </>
  );
}

export default App;
