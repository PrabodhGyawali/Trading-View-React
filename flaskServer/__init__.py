from flask import Flask
import os
from services.db_schema import db
from controllers.user import user_routes
from routes import api_routes

# Function will be for setting up configurations for the Flask app
def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    if test_config is None:
        # Default configurations
        app.config.from_mapping(
            SECRET_KEY=os.environ.get("SECRET_KEY"),
            SQLALCHEMY_DATABASE_URI=os.environ.get("DATABASE_URI"),
        )

    else:
        # For testing, development and production configurations
        app.config.from_mapping(test_config)

    # Importing different routes
    app.register_blueprint(user_routes)
    
    # Database setup
    db.init_app(app)
    db.create_all(app)


    return app
