import { Link, Outlet } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Website</h1>
          <p>
            Build modern, responsive, and user-friendly web applications using
            React. Start your journey today and create amazing projects.
          </p>

          <div className="hero-buttons">
            <Link to="/getstarted" className="primary-btn">
              Get Started
            </Link>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
            alt="Programming"
          />
        </div>
      </section>

      <section className="features">
        <h2>Our Features</h2>

        <div className="feature-container">
          <div className="card">
            <h3>Fast</h3>
            <p>Lightning-fast performance with modern React development.</p>
          </div>

          <div className="card">
            <h3>Responsive</h3>
            <p>Looks great on desktop, tablet, and mobile devices.</p>
          </div>

          <div className="card">
            <h3>Easy to Use</h3>
            <p>Simple UI with a clean and attractive design.</p>
          </div>
        </div>
      </section>
      <Outlet />
    </main>
  );
};

export default Home;
