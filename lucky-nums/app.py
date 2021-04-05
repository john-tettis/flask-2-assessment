from flask import Flask, render_template, request, jsonify
from helpers import number_serialized, year_serialized

app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route('/api/get-lucky-num', methods=['POST'])
def get_lucky_number():
    """Accumulates json data and verifies it. if all is well, sends request to number api and returns data accordingly, else returrns errors"""
    colors = ['red', 'orange','yellow', 'green', 'blue','purple']
    errors = {}

    name = request.json["name"]
    email = request.json["email"]
    year = request.json["year"]
    color = request.json["color"]
    if color not in colors:
        if color:
            errors['color'] = f"{color} is not a valid color. You may pick: {', '.join(colors)}"
        else:
            errors['color'] = f"Color is required. You may pick: {', '.join(colors)}"

    if not name:
        errors['name'] ='Name is required'
    if not email:
        errors['email'] ='Email is required'
    if not year:
        errors['year'] ='Year is required'
    if errors:
        return (jsonify(errors=errors))

    num = number_serialized()
    year = year_serialized(year)
    return jsonify({
        'num':num,
        'year':year
    })
            
    
