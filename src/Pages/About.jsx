
const styles = {
  container: {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "40px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.8",
  },
  heading: {
    textAlign: "center",
    color: "#2563eb",
    marginBottom: "20px",
  },
  subHeading: {
    color: "#1d4ed8",
    marginTop: "20px",
  },
};

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>

      <p>
        We are passionate about delivering high-quality web solutions that help
        businesses grow and succeed in the digital world.
      </p>

      <h2 style={styles.subHeading}>Our Mission</h2>
      <p>
        To create innovative, user-friendly, and scalable digital experiences
        that make a difference.
      </p>

      <h2 style={styles.subHeading}>Why Choose Us?</h2>

      <ul>
        <li>✔ Experienced Developers</li>
        <li>✔ Modern Technologies</li>
        <li>✔ Affordable Pricing</li>
        <li>✔ Excellent Customer Support</li>
      </ul>
    </div>
  );
};

export default About;
