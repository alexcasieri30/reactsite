#! /bin/bash

cd api
nodemon index
cd ..
cd flask_ml
python3 main.py
cd ..
