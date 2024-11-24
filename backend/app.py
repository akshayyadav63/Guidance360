from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Allow requests from the React frontend

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["signup_database"]
users_collection = db["users"]
assessments_collection = db["academic_assessments"]


@app.route("/signup", methods=["POST"])
def signup():
    # Get data from the request
    data = request.json
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    # Check if the user already exists
    if users_collection.find_one({"email": email}):
        return jsonify({"error": "User already exists"}), 400

    # Insert new user into MongoDB
    users_collection.insert_one({
        "name": name,
        "email": email,
        "password": password  # For production, hash passwords!
    })

    return jsonify({"message": "User registered successfully!"}), 201


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    # Find user in the database
    user = users_collection.find_one({"email": email})
    if user and user["password"] == password:  # Validate password (hash comparison in production)
        return jsonify({"message": "Login successful!", "name": user["name"]}), 200

    return jsonify({"error": "Invalid email or password"}), 401







@app.route("/submit-assessment", methods=["POST"])
def submit_assessment():
    # Get data from the request (from React form)
    data = request.json

    name = data.get("name")
    gender = data.get("gender")
    age = data.get("age")
    education = data.get("education")
    mcqAnswers = data.get("mcqAnswers")
    writtenAnswer = data.get("writtenAnswer")
    skills = data.get("skills")
    extracurricular = data.get("extracurricular")

    # Validate required fields
    if not all([name, gender, age, education]):
        return jsonify({"error": "Missing required fields"}), 400

    # Insert the form data into MongoDB
    assessment_data = {
        "name": name,
        "gender": gender,
        "age": age,
        "education": education,
        "mcqAnswers": mcqAnswers,  # Optional
        "writtenAnswer": writtenAnswer,  # Optional
        "skills": skills,
        "extracurricular": extracurricular
    }

    assessments_collection.insert_one(assessment_data)

    return jsonify({"message": "Assessment submitted successfully!"}), 201



if __name__ == "__main__":
    app.run(debug=True)
