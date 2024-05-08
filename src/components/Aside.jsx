import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Aside = ({ topics }) => {
  const [hideAside, setHideAside] = useState(true);
  function changeHideAside() {
    console.log(hideAside);
    setHideAside(!hideAside);
    if (hideAside) {
      document.getElementById("aside2").id = "aside-hide-false";
      document.getElementById("homeMain").id = "homeMain2";
    } else {
      document.getElementById("aside-hide-false").id = "aside2";
      document.getElementById("homeMain2").id = "homeMain";
    }
  }
  return (
    <>
      <aside>
        <button id="aside-hide" onClick={changeHideAside}>
          Toggle Topics{" "}
        </button>
      </aside>

      <aside id="aside2">
        <h2 id="aside-header">Search by topic</h2>
        {topics.map((topic) => {
          return (
            <ul id="aside-topics">
              <li key={topic.slug}>{topic.slug}</li>
            </ul>
          );
        })}
      </aside>
    </>
  );
};

export default Aside;
