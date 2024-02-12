import styled from "styled-components";

const StyledNavBar = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  h1 {
    margin: 0;
  }
`;

export function NavBar() {
  return (
    <>
      <StyledNavBar>
        <ul>
          <li>Home</li>
          <li>US Politics</li>
          <li>Technology</li>
          <h1>ETZena</h1>
          <li>Business</li>
          <li>Sport</li>
          <li>Entertainment</li>
        </ul>
      </StyledNavBar>
    </>
  );
}
