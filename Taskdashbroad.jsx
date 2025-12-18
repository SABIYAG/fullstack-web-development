import { useState } from "react";

const Attendance = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>📝 Task List Dashboard</h2>

        <div style={styles.inputBox}>
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addBtn}>
            Add
          </button>
        </div>

        <ul style={styles.list}>
          {tasks.map((t, index) => (
            <li key={index} style={styles.listItem}>
              <span>{t}</span>
              <button
                style={styles.removeBtn}
                onClick={() => removeTask(index)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p style={styles.empty}>No tasks added yet</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#eef2ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    width: "400px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    color: "#2d3436",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addBtn: {
    padding: "8px 12px",
    backgroundColor: "#0984e3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    backgroundColor: "#f1f2f6",
    borderRadius: "5px",
    marginBottom: "8px",
  },
  removeBtn: {
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "4px 8px",
  },
  empty: {
    textAlign: "center",
    color: "#888",
    marginTop: "15px",
  },
};

export default Attendance;
