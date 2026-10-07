import { useState } from "react";
import "../index.css";
import {Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Sign in to continue</p>

        <form onSubmit={handlesubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <Link to="/register" className="footer-text">
          Don't have an account? <a href="/">Register</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
