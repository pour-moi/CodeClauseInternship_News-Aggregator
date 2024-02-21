import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    min-width: 80em;
    min-height: 40em;
  }
  .textArea {
    width: 40em;
    min-height: 7em;
    padding: 1em;
    background-color: white;
    border: 1px solid black;
    position: absolute;
    top: 930px;
    right: 300px;
  }
  p {
    text-align: center;
  }
  .Title {
    font-weight: bold;
  }
`;

const StyledButton = styled.div`
  display: flex;
  margin: 8em;
  margin-bottom: 4em;
  position: relative;
  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid black;
    font-size: 1em;
    background-color: white;
    margin: 0.1em;
  }
`;

const UserChoice = styled.div`
  // display: flex;
  // gap: 5em;
  h1 {
    margin-right: 21em;
    font-family: "RockStar";
  }
`;

// const LatTren = styled.div`
//   display: flex;
//   gap: 1em;
// `;

const apikey = "f9bce01001494f7dad469d0aeafbca16";
const NewsAPI = `https://newsapi.org/v2/everything?sources=fox-news&apiKey=${apikey}`;
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
          src={newsData?.articles[currentNewsIndex]?.urlToImage || ""}
          alt=""
        />{" "}
        <div className="textArea">
          <p className="Title">{newsData?.articles[currentNewsIndex]?.title}</p>
          <p>
            <i>{newsData?.articles[currentNewsIndex]?.description}</i>
          </p>
        </div>
        <StyledButton>
          <button onClick={goToPreviousNews}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={goToNextNews}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </StyledButton>
      </StyledHeader>
    </>
  );
}
