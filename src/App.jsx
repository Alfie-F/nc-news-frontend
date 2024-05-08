import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Home from "./components/Home";
import Article from "./components/Article";
import Account from "./components/Account";
import Options from "./components/Options";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="bodyMain">
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article" element={<Article />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/options" element={<Options />} />
        </Routes>
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
