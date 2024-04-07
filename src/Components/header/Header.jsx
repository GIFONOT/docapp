import React, { useState } from "react";
import logo from "./hselogo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import LoginForm from '../Authorization/LoginForm/LoginForm.js'

function Header() {
  const [loginVisible, setLoginVisible] = useState(true);
  const [ffdf, fdfd] = useState(false);
  function gg(){
    fdfd(true)
  }

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
          <Link to="/account">Аккаунт</Link>
          <Link to="/student">Студенты</Link>
          <Link to="/CompanyProfile">Профиль компании</Link>
          <Link to="/FAQ">FAQ</Link>
          {loginVisible && <Link to='/LoginForm'>Вход</Link>}
          
        </div>
      </body>
    </>
  );
}

export default Header;
