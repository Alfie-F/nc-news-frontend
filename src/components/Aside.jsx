import { useState, useEffect } from "react";
import { getTopics } from "../../api";

const Aside = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => getTopics(setTopics), []);

  const [hideAside, setHideAside] = useState(true);
  function changeHideAside() {
    setHideAside(!hideAside);
    if (hideAside) {
      document.getElementById("aside2").id = "aside-hide-false";
      document.getElementById("homeMain").id = "homeMain2";
      document.getElementById("asideButton2").id = "asideButton";
    } else {
      document.getElementById("aside-hide-false").id = "aside2";
      document.getElementById("homeMain2").id = "homeMain";
      document.getElementById("asideButton").id = "asideButton2";
    }
  }
  return (
    <>
      <aside id="asideButton2">
        <button id="aside-hide" onClick={changeHideAside}>
          Toggle Topics{" "}
        </button>
      </aside>

      <aside id="aside2">
        <h2 id="aside-header">Search by topic</h2>
        <ul id="aside-topics">
          {topics.map((topic) => {
            return (
              <li id="aside-topics" key={topic.slug}>
                {topic.slug}
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Aside;
