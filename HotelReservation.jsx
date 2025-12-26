const HotelReservation = () => {
  const reserveRoom = () => {
    // Prompt dialogs – user input
    const name = prompt("Enter Guest Name:");
    if (!name) {
      alert("Reservation cancelled: Name is required.");
      return;
    }

    const roomType = prompt("Enter Room Type (Single / Double / Deluxe):");
    if (!roomType) {
      alert("Reservation cancelled: Room type is required.");
      return;
    }

    const nights = prompt("Enter Number of Nights:");
    if (!nights || isNaN(nights)) {
      alert("Reservation cancelled: Valid number of nights required.");
      return;
    }

    // Confirm dialog
    const confirmReservation = confirm(
      Confirm Reservation?\nGuest: ${name}\nRoom Type: ${roomType}\nNights: ${nights}
    );

    if (confirmReservation) {
      // Alert dialog
      alert(
        ✅ Reservation Successful!\nGuest: ${name}\nRoom: ${roomType}\nNights: ${nights}
      );
    } else {
      alert("❌ Reservation cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🏨 Hotel Reservation System</h2>
      <button style={styles.button} onClick={reserveRoom}>
        Reserve Room
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
    backgroundColor: "#fdf6ec",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "20px",
    color: "#6c5ce7",
  },
  button: {
    padding: "12px 22px",
    fontSize: "16px",
    backgroundColor: "#e17055",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default HotelReservation;
