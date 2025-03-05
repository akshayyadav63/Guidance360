const Assessment = require("../models/Assessment");

exports.submitDetails = async (req, res) => {
  try {
    const { email, name, gender, age, education, skills, extracurricular } = req.body;

    if (!email || !name || !gender || !age || !education) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const assessment = new Assessment({
      email, name, gender, age, education, skills, extracurricular,
    });

    await assessment.save();
    res.status(201).json({ message: "Assessment submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
