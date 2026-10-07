import { Link, Outlet, useSearchParams } from "react-router-dom";

const Services = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  console.log(category);
  const services = [
    {
      title: "Web Development",
      link: "/web",
      icon: "💻",
      description:
        "We build responsive, fast, and scalable websites using modern technologies like React, Node.js, and Express.",
    },
    {
      title: "UI/UX Design",

      icon: "🎨",
      description:
        "Create beautiful, user-friendly interfaces that provide a seamless experience across all devices.",
    },
    {
      title: "Mobile App Development",
      icon: "📱",
      description:
        "Develop high-performance Android and iOS applications tailored to your business needs.",
    },
    {
      title: "Digital Marketing",
      icon: "📈",
      description:
        "Boost your online presence with SEO, social media marketing, and targeted advertising campaigns.",
      link: "/",
    },
    {
      title: "Cloud Solutions",
      icon: "☁️",
      description:
        "Secure cloud hosting, migration, and infrastructure management for businesses of all sizes.",
    },
    {
      title: "Technical Support",
      icon: "🛠️",
      description:
        "Reliable maintenance, troubleshooting, and 24/7 technical support to keep your systems running.",
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f8fafc",
      padding: "60px 20px",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    heading: {
      textAlign: "center",
      fontSize: "40px",
      color: "#1e3a8a",
      marginBottom: "15px",
    },
    subtitle: {
      textAlign: "center",
      color: "#64748b",
      fontSize: "18px",
      maxWidth: "700px",
      margin: "0 auto 50px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "25px",
    },
    card: {
      background: "#fff",
      borderRadius: "15px",
      padding: "30px",
      textAlign: "center",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      transition: "0.3s ease",
      cursor: "pointer",
    },
    icon: {
      fontSize: "50px",
      marginBottom: "20px",
    },
    title: {
      fontSize: "24px",
      color: "#2563eb",
      marginBottom: "15px",
    },
    description: {
      color: "#555",
      lineHeight: "1.7",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Our Services</h1>

        <p style={styles.subtitle}>
          We provide innovative technology solutions to help businesses grow,
          improve efficiency, and achieve long-term success.
        </p>

        <div style={styles.grid}>
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 30px rgba(37,99,235,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
              }}
            >
              <div style={styles.icon}>{service.icon}</div>

              <h3 style={styles.title}>{service.title}</h3>

              <p style={styles.description}>{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Services;
