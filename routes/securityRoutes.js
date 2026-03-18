const express = require("express");
const router = express.Router();
const { checkURL } = require("../controllers/securityController");

router.post("/check-url", checkURL);

module.exports = router;