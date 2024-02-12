import styled from "styled-components";

const StyledNews = styled.div`
  img {
    width: 13em;
    height: 12em;
  }
  display: flex;
  align-items: center;
  //   flex-direction: column;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10em;
`;

const DetailInfos = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1em;
`;

export function News() {
  return (
    <>
      <StyledNews>
        <div>
          <h1>Recent News</h1>
          <img src="" alt="" />
        </div>
        <Infos>
          <h4>Title</h4>
          <p>Description</p>
          <DetailInfos>
            <p>Topic</p>
            <p>Views</p>
            <p>Posted</p>
          </DetailInfos>
        </Infos>
      </StyledNews>
    </>
  );
}
