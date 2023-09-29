import React from "react";
import "./style.css";
import logoImg from "../../img/easy-car-logo.png";

const Header = () => {
  return (
    <header className="header">
      <h1 className="headerTitle">Easy Carros</h1>
      <img src={logoImg} alt="logo.img" className="logo"></img>
    </header>
  );
};

export default Header;
