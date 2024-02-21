import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5em;
    padding: 0;
  }
  h1 {
    margin: 0;
    font-family: "Akira";
  }
  li {
    cursor: pointer;
  }
`;

export function NavBar() {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Politics">Politics</Link>
        </li>
        <li>
          <Link to="/Technology">Technology</Link>
        </li>
        <h1>ET Zena</h1>
        <li>
          <Link to="/Business">Business</Link>
        </li>
        <li>
          <Link to="/Sport">Sport</Link>
        </li>
        <li>
          <Link to="/Entertainment">Entertainment</Link>
        </li>
      </ul>
    </StyledNavBar>
  );
}
