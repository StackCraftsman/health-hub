"""Flask Application"""
from flask_cors import CORS
from flasgger import Swagger
from  flasgger.utils import swag_from
from flask_bcrypt import Bcrypt 
from flask import Flask, make_response, jsonify
from api.v1.views import app_views
import datetime

import os
from flask_jwt_extended import JWTManager

import dotenv

dotenv.load_dotenv()

"""Instantiate flask object """
app = Flask(__name__)


"""Config for swagger doc """


template = {
  "swagger": "2.0",
  "info": {
    "title": "Flask Restful Swagger Demo",
    "description": "A Demof for the Flask-Restful Swagger Demo",
    "version": "0.1.1",
    "contact": {
      "name": "health-hub",
      "url": "https://Kanoki.org",
    }
  },
  "securityDefinitions": {
    "Bearer": {
      "type": "apiKey",
      "name": "Authorization",
      "in": "header",
      "description": "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\""
    }
  },
  "security": [
    {
      "Bearer": [ ]
    }
  ]

}

app.config['SWAGGER'] = {
    'title': 'health-hub Restful API',
    'uiversion': 3,
    "url_prefix": "/api/v1/docs"
}

swagger = Swagger(app, template= template)

""" config to return a friendly json object """
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

"""Register the bluePrint for (/api/vi) route """
app.register_blueprint(app_views)

""" cors for /api/v1 """
cors = CORS(app, resources={r"/api/v1/*": {"origins": "*"}})

""" config for secret key"""
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(minutes=30)


bcrypt = Bcrypt(app)
jwt = JWTManager(app)

@app.errorhandler(404)
def not_found(error):
    """ 404 Error
    ---
    responses:
      404:
        description: a resource was not found
    """
    return make_response(jsonify({'error': "Not found"}), 404)



