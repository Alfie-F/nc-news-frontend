import { Link } from "react-router-dom";
import img from "../assets/img3.png";
import image2 from "../assets/image2.png";

const Header = () => {
  return (
    <header className="header">
      <img src={image2} alt="Newwit logo-2" className="logo-2" id="logo-2" />
      <img src={img} alt="Newwit logo" className="logo" id="logo" />
      <h2 id="logo-3">Your home for news...</h2>
      <Link to="/" className="linkInHeader" id="home">
        Home
      </Link>
      <Link to="/account" className="linkInHeader" id="account">
        Account
      </Link>
      <Link to="/account/options" className="linkInHeader" id="options">
        options
      </Link>
      <div to="/account/sell" className="linkInHeader" id="search">
        Search
      </div>
    </header>
  );
};

export default Header;
