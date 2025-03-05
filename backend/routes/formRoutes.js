const express = require("express");
const { submitDetails } = require("../controllers/formController");

const router = express.Router();

router.post("/submit-details", submitDetails);

module.exports = router;
