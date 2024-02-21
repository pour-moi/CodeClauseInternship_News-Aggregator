import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { ApiKey } from "./api.js";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 70em;
    height: 36em;
    margin-bottom: 9em;
  }
  .textArea {
    width: 40em;
    min-height: 7em;
    padding: 1em;
    background-color: white;
    border: 1px solid black;
    position: absolute;
    top: 750px;
    right: 300px;
  }
  p {
    text-align: center;
    font-family: "Tommy";
    color: #808080;
  }
  .Title {
    font-family: "Kanit";
    font-weight: bold;
    color: black;
  }
`;

const StyledButton = styled.div`
  display: flex;
  gap: 75em;
  margin: 4em;
  position: absolute;
  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid white;
    font-size: 1em;
    background-color: #dadada;
    margin: 0.1em;
  }
`;

const UserChoice = styled.div`
  h1 {
    margin-right: 21em;
    font-family: "RockStar";
    color: #330c6f;
  }
`;

// const LatTren = styled.div`
//   display: flex;
//   gap: 1em;
// `;

const NewsAPI = `https://newsapi.org/v2/everything?sources=fox-news&apiKey=${ApiKey()}`;
export function HeaderNews() {
  const [newsData, setNewsData] = useState(null);
  const [setError] = useState(null);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(NewsAPI);
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
  }, []);
  const goToNextNews = () => {
    setCurrentNewsIndex((prevIndex) => prevIndex + 1);
  };

  const goToPreviousNews = () => {
    setCurrentNewsIndex((prevIndex) => prevIndex - 1);
  };
  return (
    <>
      <StyledHeader>
        <UserChoice>
          <h1>Trending News</h1>
          {/* <LatTren>
            <p>Latest</p>
            <p>Trending</p>
          </LatTren> */}
        </UserChoice>
        <img
          onClick={() =>
            (window.location.href = newsData?.articles[currentNewsIndex]?.url)
          }
          src={newsData?.articles[currentNewsIndex]?.urlToImage || ""}
          alt=""
          style={{ cursor: "pointer" }}
        />{" "}
        <div className="textArea">
          <p className="Title">{newsData?.articles[currentNewsIndex]?.title}</p>
          <p>
            <i>{newsData?.articles[currentNewsIndex]?.description}</i>
          </p>
        </div>
        <StyledButton>
          <div>
            <button onClick={goToPreviousNews}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </div>
          <div>
            <button onClick={goToNextNews}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </StyledButton>
      </StyledHeader>
    </>
  );
}
