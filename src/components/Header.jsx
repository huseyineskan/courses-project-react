import React from "react";
import "../css/Header.css";
import { courses } from "../data/data";

function uniqueCategories(obj) {
  const seenCategories = new Set();
  return obj.filter((course) => {
    const isDuplicate = seenCategories.has(course.category); // Kategori daha önce görülmüş mü?
    seenCategories.add(course.category); // Kategori eklenir
    return !isDuplicate; // Aynı kategori tekrar edilmez
  });
}

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
            {uniqueCategories(courses)?.map((course) => (
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setSelectedCategory(course.category);
                  }}
                >
                  {course.category.charAt(0).toUpperCase() +
                    course.category.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
