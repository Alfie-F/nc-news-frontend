import axios from "axios";

export function getArticles(setArticles) {
  return axios
    .get("https://alfs-nc-news.onrender.com/api/articles")
    .then((articlesData) => {
      const allArticles = articlesData.data.articles;
      return allArticles;
    });
}

export function getTopics(setTopics) {
  return axios
    .get("https://alfs-nc-news.onrender.com/api/topics")
    .then((topicsData) => {
      const allTopics = topicsData.data.topics;
      return allTopics;
    });
}

export function getArticle(article_id) {
  return axios
    .get(`https://alfs-nc-news.onrender.com/api/articles/${article_id}`)
    .then((articleData) => {
      const article = articleData.data.article;
      return article;
    });
}
// export function sayHi() {

//   if (hideAside) {
//     document.getElementById("aside2").id = "aside-hide-false";
//     document.getElementById("homeMain").id = "homeMain2";
//     document.getElementById("asideButton").id = "asideButton2";
//   } else {
//     document.getElementById("aside-hide-false").id = "aside2";
//     document.getElementById("homeMain2").id = "homeMain";
//     document.getElementById("asideButton2").id = "asideButton";
//   }
// }
