import { getArticles } from "../../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <Loading />;
  else
    return (
      <main id="homeMain">
        <ul id="article">
          {articles.map((article) => {
            return (
              <li key={article.article_id}>
                <Link
                  to={`/articles/${article.article_id}`}
                  // article={article.article_id}
                >
                  <h3 id="article_title">{article.title}</h3>
                </Link>
                <p id="topic">Topic: {article.topic}</p>
                <p id="author">Author: {article.author}</p>
                <p id="comment_count"> Comments: {article.comment_count}</p>
                <p id="votes">Votes: {article.votes}</p>
                <p id="created_at">
                  Posted on {article.created_at.split("T")[0]}
                </p>
                <p
                  key={article.article_id}
                  id="article_img_url"
                  width="40px"
                  height="40px"
                >
                  <img
                    id="article-img"
                    src={article.article_img_url}
                    alt={article.article_img_url}
                  />
                </p>
              </li>
            );
          })}
        </ul>
      </main>
    );
};

export default Home;
