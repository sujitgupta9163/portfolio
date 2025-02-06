import { FaDownload } from "react-icons/fa";
import resume from "../assets/Sujit_resume.pdf"; // Import the resume file

const Resume = () => {
  const skillsStyle = {
    padding: "4rem 1rem",
    backgroundColor: "#111827",
    color: "white",
  };

  const downloadButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    backgroundColor: "#3B82F6",
    color: "white",
    padding: "1rem 2rem",
    borderRadius: "0.5rem",
    textDecoration: "none",
    marginTop: "3rem",
    transition: "background-color 0.3s ease",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <section id="skills" style={skillsStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        {/* Download Resume Section */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a 
            href={resume} // Use the imported file
            download="Sujit_resume.pdf" // Specify the download file name
            style={downloadButtonStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#2563EB"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#3B82F6"}
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;