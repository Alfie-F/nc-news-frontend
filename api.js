import axios from "axios";
import React, { useEffect, useState } from "react";

const getArticles = (setArticles) => {
  axios
    .get("https://alfs-nc-news.onrender.com/api/articles")
    .then((articlesData) => {
      const allArticles = articlesData.data.articles;
      return setArticles(allArticles);
    });
};

export default getArticles;
