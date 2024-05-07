import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Home from "./components/Home";
import "./App.css";
import getArticles from "../../api";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => getArticles(setArticles), []);
  return (
    <>
      <Header />
      <main className="bodyMain">
        <Aside />
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
