from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS

# Initialize the Flask application
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Define shared effects
effects = {
    "relaxation": "relaxation",
    "impaired_judgment": "impaired judgment",
    "euphoria": "euphoria",
    "increased_sociability": "increased sociability",
    "increased_alertness": "increased alertness",
    "energy_boost": "energy boost",
    "nervousness": "nervousness",
    "insomnia": "insomnia",
    "increased_appetite": "increased appetite",
    "altered_perception_of_time": "altered perception of time",
    "loss_of_motor_function": "loss of motor function",
    "dry_mouth": "dry mouth"
}

# Map drugs to their effects
drugs_db = {
    "alcohol": [effects["relaxation"], effects["impaired_judgment"], effects["euphoria"], effects["increased_sociability"], effects["loss_of_motor_function"]],
    "caffeine": [effects["increased_alertness"], effects["energy_boost"], effects["nervousness"], effects["insomnia"]],
    "marijuana": [effects["euphoria"], effects["relaxation"], effects["increased_appetite"], effects["altered_perception_of_time"], effects["loss_of_motor_function"], effects["dry_mouth"]]
}

# Create an endpoint to return the effects of a drug
@app.route('/get_effects', methods=['GET'])
def get_effects():
    drug_name = request.args.get('drug', '').lower()  # Convert to lowercase
    if drug_name in drugs_db:
        return jsonify({"effects": drugs_db[drug_name]})
    else:
        return jsonify({"error": "Drug not found!"}), 404

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
