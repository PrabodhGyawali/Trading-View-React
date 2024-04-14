from flask import Flask, jsonify

app = Flask(__name__)

members = ['member1', 'member2', 'member3']

@app.route('/')
def home():
    return jsonify({'members': members})

if __name__ == '__main__':
    app.run(debug=False)
