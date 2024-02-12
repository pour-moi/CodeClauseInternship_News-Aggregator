import styled from "styled-components";

const StyledRnews = styled.div`
  img {
    width: 13em;
    height: 10em;
  }
  display: flex;
  flex-direction: column;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  width: 10em;
`;

export function RightSideNews() {
  return (
    <>
      <StyledRnews>
        <div>
          <h1>Russia war in Ukraine</h1>
          <img src="" alt="" />
        </div>
        <Infos>
          <h4>Title</h4>
          <p>Description</p>
        </Infos>
      </StyledRnews>
    </>
  );
}
