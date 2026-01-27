import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import coursesData from "../data/coursesData";
import "./Courses.css"

export default function AllCoursesPage() {

  const [level, setLevel] = useState("");
  const [type, setType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleDetailsClick = (course) => {
    navigate('/details', { state: { course } });
  };

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLevel =
      level === "" || course.level.toLowerCase() === level.toLowerCase();
    const matchesType =
      type === "" || course.type.toLowerCase() === type.toLowerCase();
    return matchesSearch && matchesLevel && matchesType;
  });

  return (
    <div className="layout-wrapper">
      <Navbar />

      <section
        className="courses-page"
      >
        {/* العناوين الرئيسية */}
        <div className="header-section">
          <h2>All Courses</h2>
          <p>Discover the perfect course to advance your career</p>
        </div>
        <div className="filters-container">
          <div className="filter-group">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search courses..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Level</label>
            <select
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Format</label>
            <select
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">All Format</option>
              <option value="online">Online</option>
              <option value="in-person">In-person</option>
            </select>
          </div>
        </div>
        {/* //Courses grid */}
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <div
              className="course-card"
              key={course.id}
            >
              <div className="course-media">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
                <span
                  className="course-rating"
                >
                  ⭐ 4.7
                </span>
              </div>

              <div className="card-content">
                <h4>{course.title}</h4>
                <p className="course-desc">{course.description}</p>

                <div
                  className="course-meta"
                >
                  <span>{course.instructor}</span>
                  <span>{course.duration}</span>
                </div>

                <div
                  className="course-tags"
                >
                  <span className="tag">{course.level}</span>
                  <span className={`tag ${course.type === "Online" ? "tag-online" : "tag-inperson"}`}>
                    {course.type}
                  </span>
                </div>

                <div className="course-actions">
                  <button
                    className="btn-secondary"
                    onClick={() => handleDetailsClick(course)}
                  >
                    Details
                  </button>
                  <button className="btn-primary">Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

