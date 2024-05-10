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

export function getComments(article_id) {
  return axios
    .get(
      `https://alfs-nc-news.onrender.com/api/articles/${article_id}/comments`
    )
    .then((commentsData) => {
      const comments = commentsData.data.comments;
      return comments;
    });
}

export function postVote(article_id, vote) {
  axios
    .patch(`https://alfs-nc-news.onrender.com/api/articles/${article_id}`, {
      inc_votes: vote,
    })
    .then((res) => {
      return res.data.update;
    });
}

export function postComment(article_id, user, comment) {
  axios
    .post(
      `https://alfs-nc-news.onrender.com/api/articles/${article_id}/comments`,
      {
        username: user,
        body: comment,
      }
    )
    .then((res) => {
      const newComment = res.data.comment;
      return newComment;
    });
}
