import { useState } from "react";

const CabBooking = () => {
  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation using Alert
    if (!name || !pickup || !drop) {
      alert("Please fill all the details!");
      return;
    }

    // Confirm dialog
    const confirmBooking = confirm(
      Confirm Cab Booking?\n\nPassenger: ${name}\nPickup: ${pickup}\nDrop: ${drop}
    );

    if (confirmBooking) {
      alert(
        ✅ Cab Booked Successfully!\n\nPassenger: ${name}\nPickup: ${pickup}\nDrop: ${drop}
      );

      // Clear form
      setName("");
      setPickup("");
      setDrop("");
    } else {
      alert("❌ Cab booking cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🚖 Online Cab Booking</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Passenger Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Drop Location"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Book Cab
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
  title: {
    marginBottom: "20px",
    color: "#2d3436",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "300px",
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
    backgroundColor: "#00b894",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
  },
};

export default CabBooking;
