class Stash():
    def __init__(self):
        self.fake_shoes = 0
        self.dvds = 0
        self.hot_sauce = 0
        self.switchblades = 0
        self.cell_phones = 0
        self.massage_chairs = 0
        self.bank = 0
        self.debt = 5500

    def reset_stash(self):
        self.fake_shoes = 0
        self.dvds = 0
        self.hot_sauce = 0
        self.switchblades = 0
        self.cell_phones = 0
        self.massage_chairs = 0
        self.bank = 0
        self.debt = 5500

    def get_amount(self, item):
        if hasattr(self, item):
            return getattr(self, item)

    def add_inventory(self, item, amount):
        if hasattr(self, item):
            new_amount = getattr(self, item) + amount
            setattr(self, item, new_amount)

    def stash(self, bank, amount_change):
        self.bank = bank + amount_change
        return getattr(self, 'bank')

    def get_stash(self):
        return self.__dict__
