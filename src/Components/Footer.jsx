import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>MyWebsite</h2>
          <p>Building modern and responsive web applications with React.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@mywebsite.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 MyWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
