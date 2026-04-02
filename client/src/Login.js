import React, { useState } from "react";
import axios from "axios";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("This is a demo login (no real authentication)");
  };

  const handleCheck = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/check",
        { url }
      );
      setResult(response.data.message);
    } catch (error) {
      setResult("Error connecting to server ❌");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <hr />

        <h3>Check Login Page Safety</h3>

        <input
          type="text"
          placeholder="Enter URL to check"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button onClick={handleCheck}>Check</button>

        {result && <p className="result">{result}</p>}
      </div>
    </div>
  );
}

export default Login;