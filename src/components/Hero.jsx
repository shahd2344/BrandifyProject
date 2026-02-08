import "./Hero.css";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="hero">
      <img src="/images/1.png" alt="hero" className="hero-img" />
      <div className="hero-content">
        <h1>Turn Knowledge Into Real Skills</h1>
        <p>

Build real-world experience with hands-on courses in technology, design, and innovation.
        </p>
      <Link to="/courses" className="btn">
  Get Started
</Link>
      </div>
    </section>
  );
}
