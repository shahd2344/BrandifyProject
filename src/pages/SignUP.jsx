import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./SignUp.css";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <section className="register-content">
        <h1>Create Account</h1>
        <p className="subtitle">Join Shifra and start your learning journey</p>

        <form className="register-form">
          <div className="name-row">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />
          </div>

          <div className="terms-option">
            <label>
              <input type="checkbox" /> I agree to the{" "}
              <a href="#">Terms and Privacy Policy</a>
            </label>
          </div>

          {/* تعديل النص هنا ليناسب صفحة الـ SignUp */}
          <button type="submit" className="btn-primary-sign">
            Sign Up
          </button>

          <div className="divider">
            <span>Or sign up with</span>
          </div>

          <div className="social-login">
            {/* تم تحويل الأزرار إلى روابط */}
            <a href="https://accounts.google.com/" className="btn-social">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="G"
              />{" "}
              Google
            </a>
            
            <a href="https://www.facebook.com/login" className="btn-social">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="F"
              />{" "}
              Facebook
            </a>
          </div>

          <p className="footer-link">
            Already have an account? <a href="/Login">Sign in here</a>
          </p>
        </form>
      </section>
      <Footer />
    </>
  );
}