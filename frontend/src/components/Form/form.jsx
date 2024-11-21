import React, { useState } from "react";

const AcademicAssessmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender:"",
    age:"",
    education: "",
    mcqAnswers: {},
    writtenAnswer: "",
    skills: [],  
    newSkill: "",  
    extracurricular: [],  
    newExtracurricular: "",  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e) => {
    setFormData({ ...formData, newSkill: e.target.value });
  };

  const handleCurricularChange = (e) => {
    setFormData({ ...formData, newExtracurricular: e.target.value });
  };

  const addSkill = () => {
    if (formData.newSkill.trim()) {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.newSkill],
        newSkill: "", // Clear input after adding
      });
    }
  };

  const addExtracurricular = () => {
    if (formData.newExtracurricular.trim()) {
      setFormData({
        ...formData,
        extracurricular: [...formData.extracurricular, formData.newExtracurricular],
        newExtracurricular: "", // Clear input after adding
      });
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove),
    });
  };

  const removeExtracurricular = (activityToRemove) => {
    setFormData({
      ...formData,
      extracurricular: formData.extracurricular.filter(activity => activity !== activityToRemove),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-100 rounded-md shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Academic Assessment Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your gender"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your age"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Current Education</label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Education Level</option>
            <option value="UG">Undergraduate</option>
            <option value="PG">Postgraduate</option>
          </select>
        </div>

        {/* Extracurricular Activities */}
        <div>
          <label className="block font-medium">Extracurricular Activities</label>
          <div className="flex mb-2">
            <input
              type="text"
              value={formData.newExtracurricular}
              onChange={handleCurricularChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter an activity"
            />
            <button
              type="button"
              onClick={addExtracurricular}
              className="ml-2 bg-green-600 text-white p-2 rounded-md"
            >
              Add
            </button>
          </div>
          <ul className="list-disc pl-5">
            {formData.extracurricular.map((activity, index) => (
              <li key={index} className="flex justify-between">
                {activity}
                <button
                  type="button"
                  onClick={() => removeExtracurricular(activity)}
                  className="ml-2 text-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills Input Section */}
        <div>
          <label className="block font-medium">Academic Subjects</label>
          <div className="flex mb-2">
            <input
              type="text"
              value={formData.newSkill}
              onChange={handleSkillChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter a  subject"
            />
            <button
              type="button"
              onClick={addSkill}
              className="ml-2 bg-green-600 text-white p-2 rounded-md"
            >
              Add
            </button>
          </div>
          <ul className="list-disc pl-5">
            {formData.skills.map((skill, index) => (
              <li key={index} className="flex justify-between">
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="ml-2 text-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AcademicAssessmentForm;
