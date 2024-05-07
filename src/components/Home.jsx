import { Link } from "react-router-dom";

const Home = ({ articles }) => {
  console.log(articles);
  return (
    <main id="homeMain">
      {articles.map((article) => {
        return (
          <ul id="article">
            <li key={article.article_id} id="article_title">
              <h3>{article.title}</h3>
            </li>
            <li key={article.article_id} id="topic">
              Topic: {article.topic}
            </li>
            <li key={article.article_id} id="author">
              Author: {article.author}
            </li>
            <li key={article.article_id} id="comment_count">
              Comments: {article.comment_count}
            </li>
            <li key={article.article_id} id="votes">
              Votes: {article.votes}
            </li>
            <li key={article.article_id} id="created_at">
              Posted on {article.created_at.split("T")[0]}
            </li>
            <li
              key={article.article_id}
              id="article_img_url"
              width="40px"
              height="40px"
            >
              {/* <img
                src={article.article_img_url}
                alt={article.article_img_url}
              /> */}
            </li>
          </ul>
        );
      })}
    </main>
  );
};

export default Home;
