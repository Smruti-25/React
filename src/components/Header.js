import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <Link to={"/contactus"}>Contact Us</Link>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact("login")
            }}
          >
          {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
