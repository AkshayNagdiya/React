import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f8fafc",
      padding: "60px 20px",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "40px",
      alignItems: "center",
    },
    left: {
      background: "#2563eb",
      color: "#fff",
      padding: "40px",
      borderRadius: "15px",
    },
    heading: {
      fontSize: "36px",
      marginBottom: "20px",
    },
    text: {
      lineHeight: "1.8",
      marginBottom: "30px",
      color: "#e2e8f0",
    },
    info: {
      marginBottom: "20px",
      fontSize: "17px",
    },
    formContainer: {
      background: "#fff",
      padding: "40px",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    },
    input: {
      width: "100%",
      padding: "14px",
      marginBottom: "18px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
    },
    textarea: {
      width: "100%",
      height: "120px",
      padding: "14px",
      marginBottom: "20px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      fontSize: "16px",
      resize: "none",
      outline: "none",
    },
    button: {
      width: "100%",
      padding: "15px",
      background: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "17px",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Left Side */}
        <div style={styles.left}>
          <h1 style={styles.heading}>Contact Us</h1>

          <p style={styles.text}>
            We'd love to hear from you! Whether you have a question, feedback,
            or a project idea, feel free to reach out.
          </p>

          <div style={styles.info}>
            📍 <strong>Address:</strong> Your City, India
          </div>

          <div style={styles.info}>
            📧 <strong>Email:</strong> info@example.com
          </div>

          <div style={styles.info}>
            📞 <strong>Phone:</strong> +91 98765 43210
          </div>

          <div style={styles.info}>
            🕒 <strong>Working Hours:</strong> Mon - Fri (9:00 AM - 6:00 PM)
          </div>
        </div>

        {/* Right Side */}
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />

            <button
              type="submit"
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.background = "#1d4ed8")}
              onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
