from flask import Flask, render_template, request
import numpy as np #linear algebra
import pandas as pd #data processing, CSV file I/O (e.g. pd.read_csv)
import seaborn as sns
import matplotlib.pyplot as plt
from scipy.stats import skew, kurtosis
import warnings
import pickle
warnings.filterwarnings('ignore')

app = Flask(__name__)
model_data = pickle.load(open('./model/dtfs.pkl', 'rb'))
model = model_data['model']
sfs = model_data['sfs']

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=["POST"])
def predict():
        data = [int(x) for x in request.form.values() if x]

        # Do prediction using model
        prediction = model.predict([data])

        # Converting binary to label
        if prediction[0] == 0 :
            prediction_label = "Kreditur Tidak Layak Mendapatkan Kredit"
        else:
            prediction_label = "Kreditur Layak Mendapatkan Kredit"

        return render_template("index.html", prediction_text = prediction_label)

if __name__ == "__main__":
    app.run(debug=True)