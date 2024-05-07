import { Link } from "react-router-dom";

const Aside = ({ topics }) => {
  return (
    <aside>
      <h2 id="aside-header">Search by topic</h2>
      {topics.map((topic) => {
        return (
          <ul id="aside-topics">
            <li key={topic.slug}>{topic.slug}</li>
          </ul>
        );
      })}
    </aside>
  );
};

export default Aside;
