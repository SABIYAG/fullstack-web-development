const FlightTicket = () => {
  const bookTicket = () => {
    // Prompt dialog – user input
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    const destination = prompt("Enter Destination:");
    if (!destination) {
      alert("Booking cancelled: Destination is required.");
      return;
    }

    // Confirm dialog
    const confirmBooking = confirm(
      Confirm Booking?\nPassenger: ${name}\nDestination: ${destination}
    );

    if (confirmBooking) {
      // Alert dialog
      alert(
        🎉 Ticket Booked Successfully!\nPassenger: ${name}\nDestination: ${destination}
      );
    } else {
      alert("❌ Ticket booking cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>✈ Flight Ticket Booking</h2>
      <button style={styles.button} onClick={bookTicket}>
        Book Flight Ticket
      </button>
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
    backgroundColor: "#eaf2ff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "20px",
    color: "#2c3e50",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    backgroundColor: "#0984e3",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default FlightTicket;
