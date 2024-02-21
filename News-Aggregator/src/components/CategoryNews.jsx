import { useEffect, useState } from "react";
import styled from "styled-components";
import { ApiKey } from "./api.js";

const StyledNews = styled.div`
  img {
    width: 26em;
    height: 13em;
  }
  display: flex;
  flex-direction: column;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 21em;
  overflow: hidden;
  margin-left: 1em;
  h4 {
    margin: 0;
  }
`;

const Styled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  h4 {
    font-family: "Kanit";
    margin: 0;
  }
  p {
    font-family: "Tommy";
    color: #808080;
  }
`;

const Head = styled.div`
  h1 {
    font-family: "RockStar";
    color: #330c6f;
  }
`;

export function NewsCategory({ category }) {
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);

  const categoryToSource = {
    Sport: "espn",
    Technology: "techcrunch",
    Politics: "nbc-news",
    Business: "bloomberg",
    Entertainment: "nbc-news",
  };

  const source = categoryToSource[category];
  const NewsAPI = `https://newsapi.org/v2/everything?sources=${source}&apiKey=${ApiKey()}`;

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
  }, [source]);

  return (
    <>
      <Head>
        <h1>{category}</h1>
      </Head>
      <Styled>
        {newsData?.articles.map((article, index) => (
          <StyledNews key={index}>
            <div>
              <img
                onClick={() => (window.location.href = article.url)}
                src={article.urlToImage || ""}
                alt={article.title}
              />
            </div>
            <Infos>
              <h4 onClick={() => (window.location.href = article.url)}>
                • {article.title}
              </h4>
              <p>{article.description || ""}</p>
            </Infos>
          </StyledNews>
        ))}
        {error && <p>Error: {error}</p>}
      </Styled>
    </>
  );
}
