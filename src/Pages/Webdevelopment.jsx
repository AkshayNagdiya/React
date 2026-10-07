import React from "react";

const WebDevelopment = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      background: "#f8fafc",
    },

    hero: {
      background: "linear-gradient(135deg, #2563eb, #1e40af)",
      color: "#fff",
      textAlign: "center",
      padding: "80px 20px",
    },

    heroTitle: {
      fontSize: "48px",
      marginBottom: "20px",
    },

    heroText: {
      fontSize: "20px",
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: "1.7",
    },

    section: {
      maxWidth: "1200px",
      margin: "60px auto",
      padding: "0 20px",
    },

    heading: {
      textAlign: "center",
      color: "#1e3a8a",
      fontSize: "36px",
      marginBottom: "40px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
      gap: "25px",
    },

    card: {
      background: "#fff",
      padding: "30px",
      borderRadius: "15px",
      textAlign: "center",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      transition: "0.3s",
      cursor: "pointer",
    },

    icon: {
      fontSize: "50px",
      marginBottom: "15px",
    },

    cardTitle: {
      color: "#2563eb",
      marginBottom: "15px",
      fontSize: "24px",
    },

    cardText: {
      color: "#555",
      lineHeight: "1.7",
    },

    process: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "20px",
      marginTop: "40px",
    },

    step: {
      background: "#2563eb",
      color: "#fff",
      padding: "25px",
      borderRadius: "12px",
      textAlign: "center",
    },

    stepNumber: {
      fontSize: "30px",
      fontWeight: "bold",
      marginBottom: "10px",
    },

    cta: {
      background: "#1e3a8a",
      color: "#fff",
      textAlign: "center",
      padding: "70px 20px",
      marginTop: "60px",
    },

    button: {
      marginTop: "25px",
      background: "#fff",
      color: "#2563eb",
      padding: "15px 35px",
      border: "none",
      borderRadius: "8px",
      fontSize: "18px",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  const services = [
    {
      icon: "🌐",
      title: "Responsive Websites",
      text: "Websites that work perfectly on desktops, tablets, and mobile devices.",
    },
    {
      icon: "⚛️",
      title: "React Development",
      text: "Modern single-page applications built with React.js and the latest technologies.",
    },
    {
      icon: "🛒",
      title: "E-Commerce",
      text: "Professional online stores with secure payment integration and product management.",
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      text: "Fast-loading websites optimized for SEO and user experience.",
    },
    {
      icon: "🔒",
      title: "Website Security",
      text: "Protect your website with industry-standard security and regular updates.",
    },
    {
      icon: "☁️",
      title: "Hosting & Deployment",
      text: "Deploy your website on reliable cloud platforms with ongoing support.",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Web Development</h1>

        <p style={styles.heroText}>
          We create modern, responsive, and high-performance websites that help
          businesses grow online. Our solutions are secure, scalable, and
          designed to deliver exceptional user experiences.
        </p>
      </section>

      {/* Services */}
      <section style={styles.section}>
        <h2 style={styles.heading}>What We Offer</h2>

        <div style={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 30px rgba(37,99,235,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
              }}
            >
              <div style={styles.icon}>{service.icon}</div>

              <h3 style={styles.cardTitle}>{service.title}</h3>

              <p style={styles.cardText}>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Our Development Process</h2>

        <div style={styles.process}>
          <div style={styles.step}>
            <div style={styles.stepNumber}>1</div>
            <h3>Planning</h3>
            <p>Understanding your goals and project requirements.</p>
          </div>

          <div style={styles.step}>
            <div style={styles.stepNumber}>2</div>
            <h3>Design</h3>
            <p>Creating clean, attractive, and user-friendly interfaces.</p>
          </div>

          <div style={styles.step}>
            <div style={styles.stepNumber}>3</div>
            <h3>Development</h3>
            <p>Building fast, secure, and scalable web applications.</p>
          </div>

          <div style={styles.step}>
            <div style={styles.stepNumber}>4</div>
            <h3>Launch</h3>
            <p>Testing, deployment, and continuous maintenance.</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section style={styles.cta}>
        <h2>Ready to Build Your Website?</h2>

        <p style={{ marginTop: "15px", fontSize: "18px" }}>
          Let's create a professional website that helps your business stand
          out.
        </p>

        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.background = "#dbeafe";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#fff";
          }}
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default WebDevelopment;
