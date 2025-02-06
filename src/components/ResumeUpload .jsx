import React, { useState } from "react";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);

  const styles = {
    section: {
      padding: "60px 20px",
      backgroundColor: "#111827", // Updated background color
      color: "white", // Ensure text is readable on the dark background
      textAlign: "center",
    },
    form: {
      maxWidth: "400px",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      padding: "20px",
      backgroundColor: "white",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
      borderRadius: "8px",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    button: {
      padding: "10px",
      fontSize: "16px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (file) {
      alert(`Resume Uploaded: ${file.name} ✅`);
      setFile(null);
    } else {
      alert("Please select a file.");
    }
  };

  return (
    <section id="resume" style={styles.section}>
      <h2>Upload Your Resume</h2>
      <form style={styles.form} onSubmit={handleUpload}>
        <input type="file" style={styles.input} accept=".pdf" onChange={handleFileChange} required />
        <button type="submit" style={styles.button}>Upload</button>
      </form>
    </section>
  );
};

export default ResumeUpload;
