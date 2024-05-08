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
      <main id="homeMain" className="page">
        <h1 id="article_title_art">{article.title}</h1>
        <p id="topic_art">Topic: {article.topic}</p>
        <p id="author_art">Author: {article.author}</p>
        <p id="comment_count_art"> Comments: {article.comment_count}</p>
        <p id="votes_art">Votes: {article.votes}</p>
        <p id="body_art">{article.body}</p>
        <p id="created_at_art">Posted on: {article.created_at.split("T")[0]}</p>
        <img
          id="article_img_art"
          src={article.article_img_url}
          alt={article.article_img_url}
        />
      </main>
    </>
  );
};

export default Article;
