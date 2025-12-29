import { useState } from "react";

const NotificationDashboard = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const message = prompt("Enter notification message:");
    if (!message) {
      alert("Notification message cannot be empty!");
      return;
    }

    setNotifications([
      ...notifications,
      { id: Date.now(), text: message },
    ]);
  };

  const clearNotifications = () => {
    if (notifications.length === 0) {
      alert("No notifications to clear!");
      return;
    }

    const confirmClear = confirm("Are you sure you want to clear all notifications?");
    if (confirmClear) {
      setNotifications([]);
      alert("All notifications cleared!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>📊 Dashboard Notifications</h2>

      <div style={styles.actions}>
        <button onClick={addNotification} style={styles.addBtn}>
          Add Notification
        </button>
        <button onClick={clearNotifications} style={styles.clearBtn}>
          Clear All
        </button>
      </div>

      <div style={styles.list}>
        {notifications.length === 0 ? (
          <p style={styles.empty}>No new notifications</p>
        ) : (
          notifications.map((note) => (
            <div key={note.id} style={styles.notification}>
              🔔 {note.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f4f6ff",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  actions: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  addBtn: {
    padding: "10px",
    backgroundColor: "#0984e3",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  clearBtn: {
    padding: "10px",
    backgroundColor: "#d63031",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  list: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    minHeight: "150px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  notification: {
    padding: "10px",
    borderBottom: "1px solid #eee",
  },
  empty: {
    textAlign: "center",
    color: "#888",
  },
};

export default NotificationDashboard;
