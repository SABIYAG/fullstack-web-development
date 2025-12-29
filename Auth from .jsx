import { useState } from "react";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dummy credentials
  const correctUsername = "admin";
  const correctPassword = "12345";

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (!username || !password) {
      alert("❌ Please enter both username and password!");
      return;
    }

    if (username === correctUsername && password === correctPassword) {
      alert("✅ Login successful!");
      setIsLoggedIn(true);
    } else {
      alert("❌ Invalid username or password!");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    alert("You have logged out.");
  };

  if (isLoggedIn) {
    return (
      <div style={styles.dashboard}>
        <h2>🎉 Welcome, {username}</h2>
        <p>You are successfully authenticated.</p>
        <button onClick={logout} style={styles.button}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>🔐 Login</h2>

      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
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
    backgroundColor: "#eef2ff",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "280px",
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
  },
  dashboard: {
    minHeight: "100vh",
    backgroundColor: "#f8f9ff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    fontFamily: "Arial, sans-serif",
  },
};

export default Auth;
