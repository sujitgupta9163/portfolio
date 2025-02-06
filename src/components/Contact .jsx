const Contact = () => {
  const contactStyle = {
    padding: "4rem 1rem",
    backgroundColor: "#111827", // Updated background color
    color: "white",
    textAlign: "center",
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    border: "2px solid #1F2937", // Added border to form
    padding: "1.5rem",
    borderRadius: "0.5rem",
  };

  const inputStyle = {
    padding: "0.5rem",
    borderRadius: "0.5rem",
    border: "2px solid #1F2937", // Added border to input fields
    backgroundColor: "#1F2937", // Darker background for input
    color: "white",
  };

  const buttonStyle = {
    backgroundColor: "#3B82F6",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    border: "2px solid #1F2937", // Added border to button
    cursor: "pointer",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section id="contact" style={contactStyle}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>Contact Me</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" style={inputStyle} required />
        <input type="email" placeholder="Your Email" style={inputStyle} required />
        <textarea placeholder="Your Message" rows="5" style={inputStyle} required />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
