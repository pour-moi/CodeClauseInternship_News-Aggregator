import styled from "styled-components";

const StyledSearchBar = styled.div`
  height: 4em;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Search = styled.div`
  margin-left: 6em;
`;

const StyledIcons = styled.div`
  display: flex;
  gap: 2em;
  margin-right: 4em;
`;

export function SearchBar() {
  return (
    <>
      <StyledSearchBar>
        <Search>
          <input placeholder="Search"></input>
          <button>search</button>
        </Search>
        <StyledIcons>
          <p style={{ color: "white" }}>icon 1</p>
          <p style={{ color: "white" }}>icon 2</p>
          <p style={{ color: "white" }}>icon 3</p>
        </StyledIcons>
      </StyledSearchBar>
    </>
  );
}
