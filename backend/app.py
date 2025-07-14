from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob

app = Flask(__name__)
CORS(app)  # This allows frontend to access backend

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data.get('text', '')
    if not text:
        return jsonify({'error': 'No text provided'}), 400

    sentiment_score = TextBlob(text).sentiment.polarity
    result = 'Positive' if sentiment_score > 0 else 'Negative'
    return jsonify({'sentiment': result})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
