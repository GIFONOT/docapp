import React, { useState } from "react";
import logo from "./hselogo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <head>
        <title>Student Internship Resume Portal</title>
      </head>
      <body>
        <div class="header">
          <img className="logo" src={logo} alt="logo" />
          <h1>Student Internship Resume Portal</h1>
        </div>
        <div class="nav">
          <Link to="/">Главная </Link>
          <Link to="/account">Аккаунт</Link>
          <Link to="/student">Студенты</Link>
          <Link to="/CompanyProfile">Профиль компании</Link>
          <Link to="/FAQ">FAQ</Link>
        </div>
      </body>
    </>
  );
}

export default Header;
