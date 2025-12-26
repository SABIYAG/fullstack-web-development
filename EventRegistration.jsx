import { useState } from "react";

const EventRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Alert for validation
    if (!name || !email || !event) {
      alert("Please fill all the details!");
      return;
    }

    // Confirm dialog
    const confirmRegister = confirm(
      Confirm Registration?\n\nName: ${name}\nEmail: ${email}\nEvent: ${event}
    );

    if (confirmRegister) {
      alert(
        ✅ Registration Successful!\n\nThank you ${name} for registering for ${event}.
      );

      // Clear form
      setName("");
      setEmail("");
      setEvent("");
    } else {
      alert("❌ Registration cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📅 Event Registration</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Event Name"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6ff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "20px",
    color: "#2c3e50",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
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

export default EventRegistration;
