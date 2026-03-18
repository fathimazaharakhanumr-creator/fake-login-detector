const express = require("express");
const router = express.Router();

router.post("/check-url", (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ success: false, message: "URL is required" });

  const suspiciousKeywords = ["login", "verify", "account"];
  const reasons = [];
  if (!url.startsWith("https://")) reasons.push("Not using HTTPS");
  suspiciousKeywords.forEach(kw => {
    if (url.toLowerCase().includes(kw)) reasons.push(`Contains: ${kw}`);
  });

  const suspicious = reasons.length > 0;
  res.json({ success: true, data: { isValid: true, usesHTTPS: url.startsWith("https://"), suspicious, reasons } });
});

module.exports = router;