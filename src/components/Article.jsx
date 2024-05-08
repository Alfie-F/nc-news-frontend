import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle } from "../../api";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => getArticle(setArticle, article_id), []);

  return (
    <>
      <main id="nonMainPageMain" className="accountPage">
        tests Article
      </main>
    </>
  );
};

export default Article;
