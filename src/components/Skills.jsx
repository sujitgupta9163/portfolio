import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaGithub } from "react-icons/fa";

const Skills = () => {
  const skillsStyle = {
    padding: "4rem 1rem",
    backgroundColor: "#111827",
    color: "white",
  };

  const skillCardStyle = {
    backgroundColor: "#1F2937",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const iconStyle = {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#3B82F6",
  };

  return (
    <section id="skills" style={skillsStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>
          My Skills
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
          {/* Frontend Skills */}
          <div style={skillCardStyle}>
            <FaReact style={iconStyle} />
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Frontend</h3>
            <p style={{ color: "#9CA3AF" }}>React, JavaScript, HTML, CSS</p>
          </div>

          {/* Backend Skills */}
          <div style={skillCardStyle}>
            <FaNodeJs style={iconStyle} />
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Backend</h3>
            <p style={{ color: "#9CA3AF" }}>Node.js, Express, MongoDB</p>
          </div>

          {/* Tools Skills */}
          <div style={skillCardStyle}>
            <FaGitAlt style={iconStyle} />
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Tools</h3>
            <p style={{ color: "#9CA3AF" }}>Git, Vite, Postman</p>
          </div>

          {/* JavaScript Skills */}
          <div style={skillCardStyle}>
            <FaJsSquare style={iconStyle} />
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>JavaScript</h3>
            <p style={{ color: "#9CA3AF" }}>ES6+, DOM Manipulation, Async/Await</p>
          </div>

          {/* Database Skills */}
          <div style={skillCardStyle}>
            <FaDatabase style={iconStyle} />
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Databases</h3>
            <p style={{ color: "#9CA3AF" }}>MongoDB, SQL</p>
          </div>

          {/* GitHub Profile */}
          <div style={skillCardStyle}>
            <FaGithub style={iconStyle} />
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>GitHub</h3>
            <p style={{ color: "#9CA3AF" }}>Check out my projects on GitHub</p>
            <a href="https://github.com/sujitgupta9163/" target="_blank" rel="noopener noreferrer" style={{ color: "#3B82F6", textDecoration: "none", fontWeight: "bold" }}>Visit GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
