import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getArticle, getComments, postVote, postComment } from "../../api";
import Loading from "./Loading";
import Aside from "./Aside";

const Article = () => {
  const { article_id } = useParams();
  const storedVote = JSON.parse(localStorage.getItem(`hasVoted${article_id}`));
  const [article, setArticle] = useState([]);
  const [votePlus, setVotePlus] = useState(1);
  const [voteMinus, setVoteMinus] = useState(-1);
  const [optimisticVote, setOptimisticVote] = useState(0);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [renderIgnore, setRenderIgnore] = useState(false);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    getArticle(article_id)
      .then((article) => {
        setArticle(article);
      })
      .then(() => {
        getComments(article_id).then((comments) => {
          setComments(comments);
          setIsLoading(false);
          if (storedVote === "up") {
          }
        });
      })
      .then(() => {});
  }, []);

  useEffect(() => {
    if (renderIgnore) {
      let subNum = -1;
      if (optimisticVote === 1) {
        subNum = -2;
      }
      postVote(article_id, subNum);
      setOptimisticVote(-1);
      document.getElementById("voteButtonDown").disabled = true;
      document.getElementById("voteButton").disabled = false;
      localStorage.setItem(`hasVoted${article_id}`, JSON.stringify("down"));
    } else {
      setRenderIgnore(true);
    }
  }, [voteMinus]);

  useEffect(() => {
    if (renderIgnore) {
      let subNum = 1;
      if (optimisticVote === -1) {
        subNum = 2;
      }
      postVote(article_id, subNum);
      setOptimisticVote(1);
      document.getElementById("voteButton").disabled = true;
      document.getElementById("voteButtonDown").disabled = false;
      localStorage.setItem(`hasVoted${article_id}`, JSON.stringify("up"));
    } else {
      setRenderIgnore(true);
      if (storedVote === "down") {
        console.log(storedVote);
      }
    }
  }, [votePlus]);

  useEffect(() => {
    if (renderIgnore) {
      let comment = document.getElementById("write_comment").value;
      let user = document.getElementById("comment_label").value;
      if (user === "Choose here" || comment === "") {
        document.getElementById("popUp").removeAttribute("hidden");
      } else {
        document.getElementById("submit_button").disabled = true;
        postComment(article_id, user, comment);
      }
    }
  }, [submit]);

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
        <div id="submit_comment_art">
          <div id="submit_txt">Submit Comment</div>
          <input
            id="write_comment"
            type="text"
            placeholder="Write Your Comment..."
          ></input>
          <span id="popUp" hidden>
            Please choose a username (until I add accounts) & write a comment
            before submitting!
          </span>
          <select id="comment_label">
            {/* hardcoded until accounts are set up - are we expected to do this? */}
            <option selected disabled>
              Choose here
            </option>
            <option value="tickle122">tickle122</option>
            <option value="grumpy19">grumpy19</option>
            <option value="happyamy2016">tickle122</option>
            <option value="cooljmessy">happyamy2016</option>
            <option value="weegembump">weegembump</option>
            <option value="jessjelly">jessjelly</option>
          </select>
          <button id="submit_button" onClick={setSubmit}>
            Submit!
          </button>
        </div>
        <p id="votes_art">
          <div> Votes: {article.votes + optimisticVote} </div>
          <button id="voteButton" disabled={false} onClick={setVotePlus}>
            Praise it!
          </button>
          <button id="voteButtonDown" disabled={false} onClick={setVoteMinus}>
            Point Down!
          </button>
        </p>
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
