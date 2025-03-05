const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  education: { type: String, required: true },
  skills: { type: [String] },
  extracurricular: { type: [String] },
});

module.exports = mongoose.model("Assessment", AssessmentSchema);
