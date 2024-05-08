import axios from "axios";

export function getArticles(setArticles) {
  axios
    .get("https://alfs-nc-news.onrender.com/api/articles")
    .then((articlesData) => {
      const allArticles = articlesData.data.articles;
      return setArticles(allArticles);
    });
}

export function getTopics(setTopics) {
  axios
    .get("https://alfs-nc-news.onrender.com/api/topics")
    .then((topicsData) => {
      const allTopics = topicsData.data.topics;
      return setTopics(allTopics);
    });
}
