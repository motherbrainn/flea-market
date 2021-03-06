
from ...utilities.utils import to_camel_case
from ...constants import Game_Mode


class Instructions():
    def __init__(self, game):
        self.instructions = """THIS IS A GAME OF BUYING, SELLING, AND EVADING CAPTURE. THE OBJECT OF THE GAME IS TO PAY OFF YOUR DEBT
        TO THE LOAN SHARK. THEN, MAKE AS MUCH MONEY AS YOU CAN IN A 1 MONTH PERIOD. IF YOU DEAL TOO HEAVILY, YOU MIGHT RUN
        INTO THE AUTHORITIES!! YOUR MAIN STASH WILL BE IN FLORIDA. THE PRICES OF ITEMS ARE AS FOLLOWS:"""
        self.game_manager = game.game_manager

    def instructions_prompt(self, key):
        if key == 'y' or key == 'Y':
            self.game_manager.set_game_mode(Game_Mode.INSTRUCTIONS)
            return to_camel_case(self.game_manager.get_game_mode().value)
        if key == 'n' or key == 'N':
            self.game_manager.set_game_mode(Game_Mode.BUY_SELL_JET)
            return to_camel_case(self.game_manager.get_game_mode().value)
        else:
            return to_camel_case(self.game_manager.get_game_mode().value)

    def get_instructions(self):
        return getattr(self, 'instructions')

    def instructions_continue(self, key):
        if key:
            self.game_manager.game_mode = Game_Mode.BUY_SELL_JET
            return to_camel_case(self.game_manager.get_game_mode().value)
        else:
            return
