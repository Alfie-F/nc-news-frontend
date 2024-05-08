import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle } from "../../api";
import Loading from "./Loading";
import Aside from "./Aside";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <Loading />;
  return (
    <>
      <Aside />
      <main id="nonMainPageMain" className="accountPage">
        <h1 id="article_title">{article.title}</h1>
        <p id="topic">Topic: {article.topic}</p>
        <p id="author">Author: {article.author}</p>
        <p id="comment_count"> Comments: {article.comment_count}</p>
        <p id="votes">Votes: {article.votes}</p>
        <p id="created_at">Posted on {article.created_at.split("T")[0]}</p>
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
      </main>
    </>
  );
};

export default Article;
