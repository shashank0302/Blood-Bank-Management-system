import React from "react";
import bdrop from "../../assets/img/bdrop.png";
import SearchPage from "./SearchPage";

import "../../assets/css/Navbar.css";
import Aboutus from "../bloodbank/aboutus";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/home">
        <img src={bdrop} alt="bdroplogo" />
      </a>
      <a href="/donate">DONATE/REQUEST</a>
      {/* <Search /> */}
      <SearchPage />
      <a href="/aboutus">About Us</a>
      
    </nav>
  );
};

export default Navbar;
