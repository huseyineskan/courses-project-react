import React from "react";

function Course({ course }) {
  return (
    <div className="course-box">
      <div className="course-img">
        <img src={course.img} alt={course.title} />
      </div>
      <div className="course-infos">
        <div className="title-price-div">
          <h2>{course.title}</h2>
          <span>{course.price}$</span>
        </div>
        <p className="course-description">{course.description}</p>
        <a href={course.link} className="course-link" target="_blank">
          Go to course
        </a>
        <span className={course.category + " course-category"}>
          {course.category}
        </span>
      </div>
    </div>
  );
}

export default Course;
