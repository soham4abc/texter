from scripts import PreProcess
from flask import Flask
from flask_restful import Resource, Api, reqparse
import pandas as pd
import ast
from flask_cors import CORS
from decouple import config

PERMANENT_PATH = ""
URL = config("BASE_URL")

app = Flask(__name__)
api = Api(app)
CORS(app, supports_credentials=True)


class Users(Resource):
    def post(self):
        parser = reqparse.RequestParser()  # initialize

        parser.add_argument("data", required=True)

        args = parser.parse_args()  # parse arguments to dictionary

        # create new dataframe containing new values
        new_data = pd.DataFrame({"index": [[]], "data": args["data"]})
        text = PreProcess.text_to_image(new_data)
        return {"data": URL + "/documents/MyFile.docx", "text": text}, 200

    def get(self):
        return {"data": "works"}, 200  # return data and 200 OK code

    pass


api.add_resource(Users, "/users")  # '/users' is our entry point for Image to Text

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=81)  # run our Flask app
