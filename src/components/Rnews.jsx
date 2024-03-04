import styled from "styled-components";
import { useState, useEffect } from "react";
import { ApiKey } from "./api.js";

const StyledRnews = styled.div`
  img {
    width: 25em;
    height: 14em;
  }
  display: flex;
  flex-direction: column;
  hr {
    width: 25em;
    margin: 0;
  }
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  width: 25em;
  h4 {
    font-family: "Kanit";
    margin-bottom: 0;
  }
  p {
    font-family: "Tommy";
    color: #808080;
    // font-size: 0.9em;
  }
`;

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: #330c6f;
  }
`;

const NewsAPI = `https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=${ApiKey()}`;

export function RightSideNews() {
  const [newsData, setNewsData] = useState(null);
  const [setError] = useState(null);

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

  return (
    <>
      <Styled>
        <h1>Breaking News</h1>
        {newsData?.articles.map((article, index) => (
          <StyledRnews key={index}>
            <div>
              {index === 0 && <img src={article.urlToImage || ""} alt="" />}
            </div>
            <Infos>
              <h4
                onClick={() => (window.location.href = article.url)}
                style={{ cursor: "pointer" }}
                className="Title"
              >
                &bull; {article.title || "Loading..."}
              </h4>
              <p
                onClick={() => (window.location.href = article.url)}
                style={{ cursor: "pointer" }}
              >
                {article.description}
              </p>
            </Infos>
            <hr />
          </StyledRnews>
        ))}
      </Styled>
    </>
  );
}
