import React from "react";
import Course from "../components/Course";
import { courses } from "../data/data";
import "../css/MainContent.css";

function MainContent() {
  return (
    <section className="main-content">
      <div className="container">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

export default MainContent;
