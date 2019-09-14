from flask import Flask, render_template, request
import json
import subprocess

app = Flask(__name__)


@app.route('/', methods=['POST'])
def post_form():
    dataForm = request.form
    print(dataForm)


    data = {
    "accesibility":{
        "text":{
            "max": int(dataForm['maxSize']),
            "min": int(dataForm['minSize']),
            "normal": int(dataForm['normSize'])
        }

    },
    "dates":{
        "initialYear": int(dataForm['initialYear']),
        "maxYear": int(dataForm['lastYear']),
        "format": dataForm['formatDate'],
        "isRangedDates": dataForm['range']
    }
    }


    with open('/Users/juan.orjuela/config-components.celula.json', 'w') as outfile:
        json.dump(data, outfile)


    subprocess.Popen("/Users/juan.orjuela/Documents/mindtrick/updater.sh \""+dataForm['repository']+"\"", shell = True)


    return "Success"


@app.route('/', methods=['GET'])
def get_form():
    return render_template('form.html', nombre="Juan!", message="hola")


if __name__ == '__main__':
    app.run()
