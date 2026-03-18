const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const securityRoutes = require("./routes/securityRoutes");
app.use("/api/security", securityRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
