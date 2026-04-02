import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = async () => {
    try {
      const res = await fetch("http://localhost:5001/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: url })
      });

      const data = await res.json();
      setResult(data.message);
    } catch (error) {
      setResult("Error connecting to server ❌");
    }
  };

  return (
    <div>
      <h2>Check Login Page Safety</h2>

      <input
        type="text"
        placeholder="Enter URL to check"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={handleCheck}>Check</button>

      <p>{result}</p>
    </div>
  );
}

export default App;