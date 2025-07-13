from flask import Blueprint, render_template, request, jsonify

chatbot_bp = Blueprint('chatbot', __name__, url_prefix='/chatbot')

# Basic prompt-response mapping
RESPONSES = {
    "hello": "Hello! How can I assist you today?",
    "help": "I'm here to help. You can ask about our offers, company info, or contact details.",
    "offers": "We have several packages available. Visit the Offers page for details.",
    "contact": "You can reach us via email or phone. Check the Contact page for more info.",
    "about": "We are a professional sales company dedicated to your success.",
}

@chatbot_bp.route("/", methods=["GET"])
def chatbot():
    return render_template("chatbot.html")

@chatbot_bp.route("/ask", methods=["POST"])
def ask():
    user_input = request.json.get("message", "").strip().lower()
    response = RESPONSES.get(user_input, "Sorry, I didn't understand that. Please try asking something else.")
    return jsonify({"response": response})
