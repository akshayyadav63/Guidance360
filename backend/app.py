from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Allow requests from the React frontend

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["signup_database"]
users_collection = db["users"]

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


if __name__ == "__main__":
    app.run(debug=True)
