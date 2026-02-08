import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
 import "./About.css"


export default function About() {
   
  const stats = [
    { id: 1, number: "500+", label: "Students" },
    { id: 2, number: "120+", label: "Courses" },
    { id: 3, number: "30+", label: "Instructors" },
    { id: 4, number: "10+", label: "Years Experience" },
  ];

  return (
    <>
    <Navbar />
    <section className="about">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>Welcome to Brandify</h1>
        <p>
          Brandify is your center for professional growth. We provide hands-on
          courses in Web Development, Mobile Apps, and UI/UX Design to prepare
          you for the real-world job market.
        </p>
      </div>

      {/* Text Section */}
      <div className="about-text">
        <p>
          At Brandify, we believe in combining theory with practice. Our
          courses are designed by experts to ensure you gain both knowledge and
          real-life skills. Join us and transform your career today!
        </p>
        <p>
          Our mission is to empower individuals with the latest technology and
          design skills, helping them stand out in a competitive job market
        </p>
      </div>

      {/* Stats Section */}
      <div className="stats">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <h2>{stat.number}</h2>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
}