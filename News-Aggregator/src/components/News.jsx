import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { ApiKey } from "./api.js";

const StyledNews = styled.div`
  img {
    width: 22em;
    height: 12em;
  }
  margin-bottom: 3em;
  display: flex;
  // align-items: center;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  width: 23em;
  overflow: hidden;
  margin-left: 1em;
  h4 {
    font-family: "Kanit";
    margin: 0;
  }
  p {
    font-family: "Tommy";
    color: #808080;
    // font-size: 0.9em;
  }
`;

// const DetailInfos = styled.div`
//   display: flex1
//   justify-content: space-around;
//   gap: 1em;
// `;

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-family: "RockStar";
    color: #330c6f;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid black;
    font-size: 1em;
    background-color: white;
    margin: 0.1em;
    margin-bottom: 2em;
  }
`;

const NewsAPI = `https://newsapi.org/v2/everything?sources=associated-press&apiKey=${ApiKey()}`;

export function News() {
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          `${NewsAPI}&page=${currentPage}&pageSize=${articlesPerPage}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setNewsData(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchNews();
  }, [currentPage]);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {/* <GlobalStyle /> */}
      <Styled>
        <h1>Recent News</h1>
        {newsData?.articles.map((article, index) => (
          <StyledNews key={index}>
            <div>
              <img
                onClick={() => (window.location.href = article.url)}
                src={article.urlToImage || ""}
                alt=""
                style={{ cursor: "pointer" }}
              />
            </div>
            <Infos>
              <h4
                onClick={() => (window.location.href = article.url)}
                className="Title"
                style={{ cursor: "pointer" }}
              >
                {article.title || "Loading..."}
              </h4>
              <p
                onClick={() => (window.location.href = article.url)}
                style={{ cursor: "pointer" }}
              >
                {article.description || "Loading..."}
              </p>
            </Infos>
          </StyledNews>
        ))}
        {error && <p>Error fetching news: {error}</p>}

        <StyledButtons>
          <button onClick={handlePrev} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={handleNext} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </StyledButtons>
      </Styled>
    </>
  );
}
