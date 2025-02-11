from flask import Flask, jsonify, request

# Initialize the Flask application
app = Flask(__name__)


drugs_db = {
    "alcohol": ["relaxation", "impaired judgment", "euphoria", "increased sociability"],
    "caffeine": ["increased alertness", "energy boost", "nervousness", "insomnia"],
    "marijuana": ["euphoria", "relaxation", "increased appetite", "altered perception of time"]
    
    # Add more drugs as needed
}

# Create an endpoint to return the effects of a drug
@app.route('/get_effects', methods=['GET'])
def get_effects():
    drug_name = request.args.get('drug')  # Get the drug name from the query parameter
    if drug_name in drugs_db:
        return jsonify({"effects": drugs_db[drug_name]})
    else:
        return jsonify({"error": "Drug not found!"}), 404

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
