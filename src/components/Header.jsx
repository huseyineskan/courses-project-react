import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="/">COURSES</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">All Courses</a>
            </li>
            <li>
              <a href="#">Udemy</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
