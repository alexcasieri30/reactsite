from typing import List
from flask import Flask, jsonify, request, Response
import pickle
import pandas as pd
from Titanic.titanic_model_helpers import *
import json
import numpy as np
import tensorflow as tf

new_model = tf.keras.models.load_model('Mnist/numbers_model.model', compile=False)
graph = tf.get_default_graph()

model = pickle.load(open('Titanic/titanic_model.pkl', 'rb'))
app = Flask(__name__)
orig_test = pd.read_csv('Titanic/titanic_test.csv');

@app.route("/")
def hello_world():
    try:
        d = request.args
        pclass = int(d.get('pclass'))
        sex = d.get("sex")
        age = int(d.get('age'))
        family = int(d.get('family'))
        fare = float(d.get('fare'))
        cabin = d.get('cabin')
        port = d.get('port')
        ticketnum = d.get('ticketnum')
        data = [sex, family, age, cabin, ticketnum, port, fare, pclass]
        features = handle_all_data(data)
        print("FEATURES: ", features)

        prediction = model.predict(features)
        print(prediction)
        response = jsonify(str(prediction[0]));
        print(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    except Exception as e:
        print(e)
        return {"RESPONSE":"FAILURE"}

@app.route("/number")
def get_number():
    try:
        grid = request.args['grid']
        grid = list(grid.replace(",",''))
        grid = np.array([int(i) for i in grid]).reshape(1, 28, 28)
        global graph
        with graph.as_default():
            result = new_model.predict(grid)
        pred = ""
        for i in result:
            percentages = i
            pred = np.argmax(i)
        percentages = [np.float64(i) for i in list(percentages)]
        percentages = json.dumps(percentages)
        pred = np.float64(pred)
        prediction = json.dumps(pred)
        print(prediction)
        response = jsonify({"RESPONSE":"SUCCESS", "percentages":percentages, "prediction":prediction})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except Exception as e:
        print(e) 
        return jsonify({"RESPONSE":"FAILURE"})

if __name__=="__main__":
    app.run(host="0.0.0.0", port="5000")