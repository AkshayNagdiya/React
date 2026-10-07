const GetStarted = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      background: "#fff",
      maxWidth: "700px",
      width: "100%",
      padding: "50px",
      borderRadius: "20px",
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      textAlign: "center",
    },
    heading: {
      fontSize: "42px",
      color: "#1e3a8a",
      marginBottom: "15px",
    },
    subHeading: {
      fontSize: "18px",
      color: "#64748b",
      lineHeight: "1.8",
      marginBottom: "35px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
    },
    input: {
      padding: "15px",
      fontSize: "16px",
      border: "1px solid #d1d5db",
      borderRadius: "10px",
      outline: "none",
    },
    select: {
      padding: "15px",
      fontSize: "16px",
      border: "1px solid #d1d5db",
      borderRadius: "10px",
      outline: "none",
      background: "#fff",
    },
    textarea: {
      padding: "15px",
      fontSize: "16px",
      border: "1px solid #d1d5db",
      borderRadius: "10px",
      minHeight: "120px",
      resize: "none",
      outline: "none",
    },
    button: {
      background: "#2563eb",
      color: "#fff",
      border: "none",
      padding: "16px",
      borderRadius: "10px",
      fontSize: "18px",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Thank you! We'll contact you soon.");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Get Started</h1>

        <p style={styles.subHeading}>
          Ready to bring your ideas to life? Fill out the form below and our
          team will get in touch with you as soon as possible.
        </p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            style={styles.input}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            style={styles.input}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            style={styles.input}
            required
          />

          <select style={styles.select} required>
            <option value="">Select a Service</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>UI/UX Design</option>
            <option>Digital Marketing</option>
            <option>Cloud Solutions</option>
            <option>Technical Support</option>
          </select>

          <textarea
            placeholder="Tell us about your project..."
            style={styles.textarea}
          />

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.background = "#1d4ed8")}
            onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;
