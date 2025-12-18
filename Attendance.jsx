import { useState } from "react";

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Anu", present: false },
    { id: 2, name: "Ravi", present: false },
    { id: 3, name: "Priya", present: false },
    { id: 4, name: "Karthi", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.heading}>📋 Attendance Tracker</h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Student Name</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Mark</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td style={styles.td}>{student.name}</td>
                <td
                  style={{
                    ...styles.td,
                    color: student.present ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {student.present ? "Present" : "Absent"}
                </td>
                <td style={styles.td}>
                  <button
                    style={{
                      ...styles.button,
                      backgroundColor: student.present ? "red" : "green",
                    }}
                    onClick={() => toggleAttendance(student.id)}
                  >
                    {student.present ? "Mark Absent" : "Mark Present"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  body: {
    minHeight: "100vh",
    backgroundColor: "#f2f6ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    width: "700px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#2c3e50",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "12px",
    backgroundColor: "#4a69bd",
    color: "white",
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center",
  },
  button: {
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Attendance;
