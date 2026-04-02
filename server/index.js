const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Enable CORS (VERY IMPORTANT)
app.use(cors());

// ✅ Parse JSON data
app.use(express.json());

// ✅ Test route (optional)
app.get("/", (req, res) => {
  res.send("Server is running");
});

// ✅ Login check route
app.post("/check-login", (req, res) => {
  const { email } = req.body;

  console.log("Received:", email);

  if (email && email.includes("fake")) {
    return res.status(200).json({
      message: "⚠️ Suspicious Login Detected!"
    });
  }

  return res.status(200).json({
    message: "✅ Safe Login"
  });
});

// ✅ Start server
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});