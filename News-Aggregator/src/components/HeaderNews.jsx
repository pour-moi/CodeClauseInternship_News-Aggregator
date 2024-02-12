import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 40em;
    height: 20em;
  }
`;

const UserChoice = styled.div`
  display: flex;
  gap: 5em;
`;

const LatTren = styled.div`
  display: flex;
  gap: 1em;
`;

export function HeaderNews() {
  return (
    <>
      <StyledHeader>
        <UserChoice>
          <p>Trending News</p>
          <LatTren>
            <p>Latest</p>
            <p>Trending</p>
          </LatTren>
        </UserChoice>
        <img src="" alt="" />
      </StyledHeader>
    </>
  );
}
