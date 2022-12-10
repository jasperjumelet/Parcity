import os
from datetime import timedelta

BASE_DIR = os.path.dirname(os.path.realpath(__file__))


# class BaseConfig():
#     SQLALCHEMY_DATABASE_URI = 'sqlite:///' + \
#         os.path.join(BASE_DIR, 'apidata.db')
#     SQLALCHEMY_TRACK_MODIFICATIONS = False
#     SECRET_KEY = "flask-app-secret-key-change-it"
#     JWT_SECRET_KEY = "jwt-app-secret-key-change-it"
#     JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)

# newbaseConfig needs testing and passing from docker file
class BaseConfig():
    SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']

    # Maybe needs True if in production to track but needs research
    SQLALCHEMY_TRACK_MODIFICATIONS = False 

    # needs if statement that check if environ is prod or dev if dev make easy secret key for simple development
    SECRET_KEY = os.environ['SECRET_KEY'] 

    # needs if statement that checks if the environ is prod or dev to make easy secret key for simple development
    JWT_SECRET_KEY = os.environ

    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
