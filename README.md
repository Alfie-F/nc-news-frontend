import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getArticle, getComments, postVote } from "../../api";
import Loading from "./Loading";
import Aside from "./Aside";

const Article = () => {
const storedVote = JSON.parse(localStorage.getItem("hasVoted"));
// const [hasVoted, setHasVoted] = useState(storedVote)
const { article_id } = useParams();
const [article, setArticle] = useState([]);
const [votePlus, setVotePlus] = useState(1);
const [voteMinus, setVoteMinus] = useState(-1);
const [optimisticVote, setOptimisticVote] = useState(0);
const [comments, setComments] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [renderIgnore, setRenderIgnore] = useState(false);
const [buttons, setButtons] = useState();
const [buttons2, setButtons2] = useState();
console.log(storedVote);

useEffect(() => {
if (storedVote === 1) {
console.log("test");
setButtons("voteButton");
} else setButtons("voteButton2");
if (storedVote === -1) {
console.log("test");
setButtons2("voteButtonDown2");
} else setButtons2("voteButtonDown");
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
if (optimisticVote === -1) {
addNum = 2;
}
postVote(article_id, addNum);
setOptimisticVote(1);
localStorage.setItem("hasVoted", JSON.stringify(1));
setButtons("voteButton");
setButtons2("voteButtonDown2");
} else {
setRenderIgnore(true);
}
}, [votePlus]);

useEffect(() => {
if (renderIgnore) {
let subNum = -1;
if (optimisticVote === 1) {
subNum = -2;
}
postVote(article_id, subNum);
setOptimisticVote(-1);
localStorage.setItem("hasVoted", JSON.stringify(-1));
setButtons("voteButton2");
setButtons2("voteButtonDown");
} else {
setRenderIgnore(true);
}
}, [voteMinus]);
