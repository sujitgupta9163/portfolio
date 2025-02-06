import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Function to update screen size state
  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setIsOpen(false); // Close the menu when resizing back to desktop
    }
  };

  // Add event listener on mount, remove on unmount
  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const navbarStyle = {
    backgroundColor: "#111827",
    padding: "1rem",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    borderBottom: "2px solid #1F2937",
    boxSizing: "border-box",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const navContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const linkContainer = {
    display: isMobile ? (isOpen ? "block" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",
    position: isMobile ? "absolute" : "static",
    top: isMobile ? "60px" : "unset",
    left: isMobile ? "0" : "unset",
    width: isMobile ? "100%" : "auto",
    backgroundColor: isMobile ? "#111827" : "transparent",
    padding: isMobile ? "1rem 0" : "0",
    textAlign: "center",
    borderTop: isMobile ? "2px solid #1F2937" : "unset",
  };

  const linkStyle = {
    color: "white",
    margin: isMobile ? "1rem 0" : "0 1rem",
    textDecoration: "none",
    fontSize: "1.1rem",
    display: "block",
    padding: isMobile ? "0.5rem 1rem" : "0.5rem 1rem", // Add padding for better click area
    borderRadius: "0.5rem", // Rounded corners
    transition: "background-color 0.3s ease, color 0.3s ease", // Smooth hover effect
    border: "2px solid #1F2937", // Add border
  };

  const buttonStyle = {
    backgroundColor: "#3B82F6",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    display: "block",
    marginTop: isMobile ? "1rem" : "0",
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Resume uploaded: ${file.name}`);
    }
  };

  return (
    <nav style={navbarStyle}>
      <div style={navContainer}>
        <h1 style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>MERN Developer</h1>

        {/* Hamburger Menu (Only Visible on Mobile) */}
        {isMobile && (
          <div
            style={{
              fontSize: "1.8rem",
              color: "white",
              cursor: "pointer",
              paddingRight: "1rem",
            }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}

        {/* Navigation Links */}
        <div style={linkContainer}>
          <a href="#hero" style={linkStyle} onClick={() => setIsOpen(false)}>Home</a>
          <a href="#skills" style={linkStyle} onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" style={linkStyle} onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" style={linkStyle} onClick={() => setIsOpen(false)}>Contact</a>
          <label htmlFor="resume-upload" style={buttonStyle}>
            Upload Resume
            <input
              id="resume-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              style={{ display: "none" }}
              onChange={handleResumeUpload}
            />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;