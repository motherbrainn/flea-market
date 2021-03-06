from flask import Flask, request, jsonify, session
from flask_cors import CORS, cross_origin
from flask_session.__init__ import Session
import random
from game_files.class_interface import call_function
from game_files.classes.Game import Game
from game_files.utilities.utils import get_params_if_params_exist
import os

# get env
try:
    env = os.environ.get('FLASK_ENV')
    print('FLASK_ENV: ', env)
except KeyError:
    print('FLASK_ENV not found')


def define_flask_object(env):
    if env == 'production':
        return Flask(__name__, static_folder='../client/build', static_url_path='/')
    else:
        return Flask(__name__)


app = define_flask_object(env)
CORS(app)
app.config["SESSION_PERMANENT"] = False
app.config['SESSION_TYPE'] = 'filesystem'
# create secret key with:
# >>> import os
# >>> os.urandom(24)
app.config['SECRET_KEY'] = '\xe5\xec\xcd\x1a\xdf\xd9\xfb\xf7\xc1\xadO\xed\x8b\xa2"\xea\xe4d\xd9!\x0e\x92D\x11'
Session(app)


@app.route('/')
@cross_origin(supports_credentials=True)
def index():
    # if running in prod send built index.html for client
    if env != 'development':
        return app.send_static_file('index.html')


@app.route('/api', methods=['POST'])
@cross_origin(supports_credentials=True)
def flea_market_flask_post():
    print('request method: ', request.method)

    # if session is not created, create session and game
    if not session.get("id"):
        print('creating new session')
        session["id"] = random.randint(0, 9)
    if not session.get("game"):
        session['game'] = Game()

    game_instance = session.get('game')

    # get some attribute from session

    if request.method == 'POST':
        function_from_request = request.get_json()['function']
        params_from_request = get_params_if_params_exist(request)
        function_response = call_function(
            function_from_request, params_from_request, game_instance)

    return (function_response)

# if __name__ == '__main__':
 #   app.run()
