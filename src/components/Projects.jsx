import React from "react";

const Projects = () => {
  const sectionStyle = {
    textAlign: "center",
    padding: "4rem 1rem",
    backgroundColor: "#111827",
    color: "white",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    color: "#3B82F6",
  };

  const projectGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
  };

  const projectCard = {
    backgroundColor: "#1F2937",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "1rem",
  };

  const linkStyle = {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#3B82F6",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  const projects = [
    {
      title: "Forever E-Commerce",
      description: "Full-stack MERN application with payment integration.",
      imageUrl: "https://picsum.photos/300/300?random=1",
      link: "https://forever-project-green.vercel.app/",
    },
    {
      title: "Shop Code E-Commerce",
      description: "A simple blog using React, Node.js, and MongoDB.",
      imageUrl: "https://picsum.photos/300/300?random=2",
      link: "https://shopcode-umber.vercel.app/",
    },
    {
      title: "Pixabay clone",
      description: "This portfolio built with React & Inline CSS.",
      imageUrl: "https://picsum.photos/300/300?random=3",
      link: "https://github.com/yourusername/portfolio",
    },
  ];

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={headingStyle}>My Projects</h2>
      <div style={projectGrid}>
        {projects.map((project, index) => (
          <div key={index} style={projectCard}>
            <img src={project.imageUrl} alt={project.title} style={imageStyle} />
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{project.title}</h3>
            <p style={{ color: "#9CA3AF" }}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
