import Course from "../components/Course";
import { courses } from "../data/data";
import "../css/MainContent.css";

function MainContent({ selectedCategory }) {
  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <section className="main-content">
      <div className="container">
        {filteredCourses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

export default MainContent;
