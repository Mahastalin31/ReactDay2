import React, { useState } from "react";
import "./styles.css";

// 1. Indha component-ah 'default' export panna venam, summaney ezhudhu
const StudentItem = ({ s }) => (
  <li
    style={{
      margin: "10px 0",
      padding: "10px",
      borderLeft: s.dept === " IT " ? "5px solid green" : "5px solid blue",
      backgroundColor: "#f9f9f9",
      listStyle: "none",
    }}
  >
    <b>
      {s.id}. {s.name}
    </b>{" "}
    —{" "}
    <span style={{ color: s.dept === " IT " ? "green" : "blue" }}>
      {s.dept}
    </span>
  </li>
);

// 2. Main App - IDHU DHAAN DEFAULT EXPORT
export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Maha", dept: "CS" },
    { id: 2, name: "Arjun", dept: "IT" },
  ]);
  const [newName, setNewName] = useState("");
  const [newDept, setNewDept] = useState("CS");

  const addStudent = () => {
    if (newName.trim() === "") return;
    setStudents([
      ...students,
      { id: students.length + 1, name: newName, dept: newDept },
    ]);
    setNewName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1> React Day 2 </h1>
      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder=" Student Name..."
      />
      <select value={newDept} onChange={(e) => setNewDept(e.target.value)}>
        <option value="CS">CS</option>
        <option value="IT">IT</option>
        <option value="CA">CA</option>
      </select>
      <button onClick={addStudent}>Add</button>

      <hr />
      <ul>
        {students.map((item) => (
          <StudentItem key={item.id} s={item} />
        ))}
      </ul>
    </div>
  );
}
