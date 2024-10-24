import React from "react";
import "../css/Header.css";

function Header({ setSelectedCategory }) {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="/">COURSES</a>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                onClick={() => {
                  setSelectedCategory("all");
                }}
              >
                All Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setSelectedCategory("udemy");
                }}
              >
                Udemy
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setSelectedCategory("youtube");
                }}
              >
                Youtube
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
