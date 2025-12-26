import { useState } from "react";

const WorkshopRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    level: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.workshop ||
      !formData.level
    ) {
      alert("Please fill all details!");
      return;
    }

    alert("✅ Registration Successful!");
  };

  return (
    <div style={styles.page}>
      {/* Form Section */}
      <div style={styles.formBox}>
        <h2>📝 Workshop Registration</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            name="workshop"
            placeholder="Workshop Topic"
            value={formData.workshop}
            onChange={handleChange}
            style={styles.input}
          />

          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
      </div>

      {/* Live Preview Section */}
      <div style={styles.previewBox}>
        <h2>👀 Live Preview</h2>
        <p><strong>Name:</strong> {formData.name || "—"}</p>
        <p><strong>Email:</strong> {formData.email || "—"}</p>
        <p><strong>Workshop:</strong> {formData.workshop || "—"}</p>
        <p><strong>Level:</strong> {formData.level || "—"}</p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6ff",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  formBox: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "320px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  previewBox: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#6c5ce7",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
  },
};

export default WorkshopRegistration;
