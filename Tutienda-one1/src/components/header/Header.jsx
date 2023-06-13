import React from "react";
import Logo from "../../assets/logo-1.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img className="header__logo" src={Logo} alt="" />
      <h1>Tutienda-one1</h1>
    </header>
  );
};

export default Header;
