# Sales Company Python Web Template

This is a modular, professional template website for a sales company, built with Python and Flask. It features a clean UI, modular code structure, and dynamic offers loaded from JSON. The site includes:

- **Main Page**
- **About Page**
- **Contact Page**
- **Offers Page** (data-driven)
- **Professional Header**
- **Cookie Consent Popup**
- **Chatbot**

## Features

- Modular Flask Blueprints for each page
- Jinja2 templating for clean, reusable layouts
- Offers loaded from a JSON file
- Responsive, professional CSS styling
- Cookie consent popup for compliance

## Getting Started

### Prerequisites

- Python 3.7+
- pip

### Installation

1. **Clone or download this repository.**

2. **Install dependencies:**
   ```
   pip install flask
   ```

3. **Directory Structure:**
   ```
   python-web/
   ├── app.py
   ├── pages/
   ├── templates/
   ├── static/
   ├── data/
   └── README.md
   ```

4. **Run the application:**
   ```
   Open terminal and type:
   python app.py
   ```

5. **Open your browser and go to:**
   ```
   http://127.0.0.1:5000/
   ```

## Customization

- **Offers:** Edit `data/offers.json` to change the offers displayed.
- **Styling:** Modify `static/style.css` for custom styles.
- **Templates:** Update HTML in `templates/` for content changes.
- **Chatbot:** Add and modify responses within Chatbot.py

## License

This project is provided as a template and can be freely used and modified.
