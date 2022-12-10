import json

from flask import Flask, request
from flask_cors import CORS


from .routes import rest_api
from .models import db

app = Flask(__name__)

app.config.from_object('api.config.BaseConfig')

db.init_app(app)
rest_api.init_app(app)
cors = CORS(app, origins="*")
app.config["CORS_HEADERS"] = 'Content-Type'


# setup database
@app.before_first_request
def initialize_database():
    db.create_all()


"""
    Custom responses
"""


@app.after_request
def after_request(response):
    """
        sends back a custom error with {"success", "msg"} format
    """
    # check for whitelist for cors for development
    white_origin= ['http://localhost:3000','http://localhost']
    if request.headers['Origin'] in white_origin:
        response.headers['Access-Control-Allow-Origin'] = request.headers['Origin'] 
        response.headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,DELETE'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'

    if int(response.status_code) >= 400:
        response_data = json.loads(response.get_data())
        if "errors" in response_data:
            response_data = {"success": False,
                             "msg": list(response_data["errors"].items())[0][1]}
            response.set_data(json.dumps(response_data))
        response.headers.add('Content-Type', 'application/json')
    return response
