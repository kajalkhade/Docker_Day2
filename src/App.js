import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  // Example: fetch from a backend server if you have one
  useEffect(() => {
    fetch("http://localhost:5000") // Make sure your Node.js server is running here
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Could not fetch data"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React App</h1>
      <p>{message || "No data yet..."}</p>
    </div>
  );
}

export default App;
