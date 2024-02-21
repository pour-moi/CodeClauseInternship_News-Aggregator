import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const StyledSearchBar = styled.div`
  height: 4em;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Search = styled.div`
  margin-left: 6em;
  color: white;
  font-size: 2em;
`;

const StyledIcons = styled.div`
  display: flex;
  font-size: 2em;
  gap: 1em;
  margin-right: 4em;
`;

export function SearchBar() {
  return (
    <>
      <StyledSearchBar>
        <Search>
          <FontAwesomeIcon icon={faNewspaper} />
        </Search>
        <StyledIcons>
          <FontAwesomeIcon style={{ color: "white" }} icon={faInstagram} />
          <FontAwesomeIcon style={{ color: "white" }} icon={faTwitter} />
          <FontAwesomeIcon style={{ color: "white" }} icon={faFacebook} />
        </StyledIcons>
      </StyledSearchBar>
    </>
  );
}
