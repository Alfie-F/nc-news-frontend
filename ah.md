import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getArticle, getComments, postVote } from "../../api";
import Loading from "./Loading";
import Aside from "./Aside";

const Article = () => {
// const [hasVoted, setHasVoted] = useState(storedVote)
const { article_id } = useParams();
const storedVote = JSON.parse(localStorage.getItem(`hasVoted${article_id}`));
const [article, setArticle] = useState([]);
const [votePlus, setVotePlus] = useState(1);
const [voteMinus, setVoteMinus] = useState(-1);
const [optimisticVote, setOptimisticVote] = useState(0);
const [comments, setComments] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [renderIgnore, setRenderIgnore] = useState(false);
const [buttons, setButtons] = useState();
const [buttons2, setButtons2] = useState();
const [wayVoted, setWayVoted] = useState();

useEffect(() => {
if (storedVote === -1) {
setButtons("voteButton");
setWayVoted("down");
} else setButtons("voteButton2");
if (storedVote === 1) {
setButtons2("voteButtonDown");
setWayVoted("up");
} else setButtons2("voteButtonDown2");
if (!storedVote) {
setButtons("voteButton");
setButtons2("voteButtonDown");
}
});

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
})
.then(() => {});
}, []);

useEffect(() => {
if (renderIgnore) {
let addNum = 1;
if (optimisticVote === -1 && wayVoted === "down") {
console.log(wayVoted);
console.log("here");
// addNum = 2;
}
postVote(article_id, addNum);
setOptimisticVote(1);
localStorage.setItem(`hasVoted${article_id}`, JSON.stringify(1));
if (storedVote === -1) {
setButtons("voteButton");
} else setButtons("voteButton2");
if (storedVote === 1) {
setButtons2("voteButtonDown");
} else setButtons2("voteButtonDown2");
} else {
setRenderIgnore(true);
}
}, [votePlus]);

useEffect(() => {
if (renderIgnore) {
let subNum = -1;
if (optimisticVote === 1 && wayVoted === "up") {
console.log("there");
// subNum = -2;
}
postVote(article_id, subNum);
setOptimisticVote(-1);
localStorage.setItem(`hasVoted${article_id}`, JSON.stringify(-1));
if (storedVote === -1) {
setButtons("voteButton");
} else setButtons("voteButton2");
if (storedVote === 1) {
setButtons2("voteButtonDown");
} else setButtons2("voteButtonDown2");
} else {
setRenderIgnore(true);
}
}, [voteMinus]);
