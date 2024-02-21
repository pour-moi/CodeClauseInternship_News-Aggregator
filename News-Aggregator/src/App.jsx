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
  @font-face {
    font-family: 'RockStar';
    src: url('../fonts/RockStar-ExtraLight.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Kanit';
    src: url('../fonts/Kanit-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Tommy';
    src: url('../fonts/CreatoDisplay-Regular.otf') format('opentype');
  }
  @font-face {
    font-family: 'Akira';
    src: url('../fonts/Akira Expanded Demo.otf') format('opentype');
  }
`;

const StyledNewsView = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: "RockStar";
`;

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
