import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Home from "./components/Home";
import "./App.css";
import { getArticles, getTopics } from "../api";

function App() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => getArticles(setArticles), []);
  useEffect(() => getTopics(setTopics), []);
  return (
    <>
      <Header />
      <main className="bodyMain">
        <Aside topics={topics} />
        <Home articles={articles} />
      </main>
    </>
  );
}

export default App;

// <Routes>
//         <Route
//           path="/"
//           element={<Home items={items} categories={categories} />}
//         />
//         <Route
//           path="/account/sell"
//           element={<Sell categories={categories} />}
//         />
//       </Routes>
