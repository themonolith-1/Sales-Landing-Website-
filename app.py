from flask import Flask
from pages.main import main_bp
from pages.about import about_bp
from pages.contact import contact_bp
from pages.offers import offers_bp
from pages.chatbot import chatbot_bp

app = Flask(__name__)

# Register Blueprints
app.register_blueprint(main_bp)
app.register_blueprint(about_bp)
app.register_blueprint(contact_bp)
app.register_blueprint(offers_bp)
app.register_blueprint(chatbot_bp)

if __name__ == "__main__":
    app.run(debug=True)
