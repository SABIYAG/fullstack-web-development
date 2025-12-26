import { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !age) {
      alert("All fields are required!");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address!");
      return;
    }

    if (age <= 0) {
      alert("Please enter a valid age!");
      return;
    }

    // Confirmation
    alert(
      ✅ Profile Updated Successfully!\n\nName: ${name}\nEmail: ${email}\nAge: ${age}
    );

    // Optional: Clear form
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>👤 Edit User Profile</h2>

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
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Save Profile
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef2ff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "15px",
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
    backgroundColor: "#0984e3",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
  },
};

export default UserProfile;
