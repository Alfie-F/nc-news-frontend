import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle, getComments } from "../../api";
import Loading from "./Loading";
import Aside from "./Aside";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticle(article_id)
      .then((article) => {
        setArticle(article);
      })
      .then(() => {
        getComments(article_id).then((comments) => {
          setComments(comments);
          setIsLoading(false);
        });
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
        <p id="comment_count_art"> Total Comments: {article.comment_count}</p>
        <p id="comment_section_art"> Comments:</p>
        <p id="votes_art">Votes: {article.votes}</p>
        <p id="body_art">{article.body}</p>
        <p id="created_at_art">Posted on: {article.created_at.split("T")[0]}</p>
        <img
          id="article_img_art"
          src={article.article_img_url}
          alt={article.article_img_url}
        />
        <ul id="comments_art">
          {comments.map((comment) => {
            return (
              <li id="comment_list" key={comment.comment_id}>
                <p id="body_com">{comment.body}</p>
                <p id="author_com"> Author: {comment.author}</p>
                <p id="votes_com">Votes: {comment.votes}</p>
                <p id="created_at_com">
                  {" "}
                  Date: {comment.created_at.split("T")[0]}
                </p>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Article;
