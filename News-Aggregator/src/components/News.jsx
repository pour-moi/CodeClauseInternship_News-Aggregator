import styled from "styled-components";

const StyledNews = styled.div`
  img {
    width: 13em;
    height: 10em;
  }
  display: flex;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  width: 10em;
`;

const DetailInfos = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1em;
`;

const StyledRnews = styled.div`
  display: flex;
  flex-direction: column;
`;

function RightSideNews() {
  return (
    <>
      <StyledRnews>
        <h3>Russia war in Ukraine</h3>
        <img src="" alt="" />
        <Infos>
          <h4>Title</h4>
          <p>Description</p>
        </Infos>
      </StyledRnews>
    </>
  );
}

export function News() {
  return (
    <>
      <h3>Recent News</h3>
      <StyledNews>
        <img src="" alt="" />
        <Infos>
          <h4>Title</h4>
          <p>Description</p>
          <DetailInfos>
            <p>Topic</p>
            <p>Views</p>
            <p>Posted</p>
          </DetailInfos>
        </Infos>
        <RightSideNews />
      </StyledNews>
    </>
  );
}
