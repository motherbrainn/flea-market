export enum GameStateEnum {
  INIT = "init",
  BUY_SELL_JET = "buySellJet",
  INSTRUCTIONS = "instructions",
  BUY = "buy",
  SELL = "sell",
  JET = "jet",
  MANAGE_INVENTORY = "manageInventory",
  CHASE = "chase",
  EVENT = "event",
}

export enum GameSubMenuEnum {
  PROMPT_FOR_SHARK = "promptForShark",
  PROMPT_FOR_STASH = "promptForStash",
  PROMPT_FOR_BANK = "promptForBank",
  SHARK = "shark",
  SHARK_BORROW = "sharkBorrow",
  STASH = "stash",
  TRANSFER_TO_TRENCH_COAT = "transferToTrenchCoat",
  BANK = "bank",
  BANK_WITHDRAW = "bankWithdraw",
  CHASE_START = "chaseStart",
  RUN = "run",
  RUN_OR_BRIBE = "runOrBribe",
  CHASE_RESULT = "chaseResult",
  HEAL = "heal",
}

export enum FleaMarketFunction {
  CHECK_MAXIMUM_BUY = "CHECK_MAXIMUM_BUY",
  GET_PRICES = "GET_PRICES",
  BUY_SELL_JET = "BUY_SELL_JET",
  CHANGE_LOCATION = "CHANGE_LOCATION",
  INSTRUCTIONS_PROMPT = "INSTRUCTIONS_PROMPT",
  GET_INSTRUCTIONS = "GET_INSTRUCTIONS",
  INSTRUCTIONS_CONTINUE = "INSTRUCTIONS_CONTINUE",
  GET_STASH = "GET_STASH",
  GET_TRENCH_COAT = "GET_TRENCH_COAT",
  GET_LOCATION = "GET_LOCATION",
  NEW_GAME = "NEW_GAME",
  GET_DAY = "GET_DAY",
  BUY_ITEM = "BUY_ITEM",
  SELL_ITEM = "SELL_ITEM",
  STAGE_CURRENT_ITEM = "STAGE_CURRENT_ITEM",
  SHARK_CONTINUE = "SHARK_CONTINUE",
  STASH_CONTINUE = "STASH_CONTINUE",
  BANK_CONTINUE = "BANK_CONTINUE",
  REPAY_SHARK = "REPAY_SHARK",
  GET_MAXIMUM_REPAY = "GET_MAXIMUM_REPAY",
  BORROW_FROM_SHARK = "BORROW_FROM_SHARK",
  DEPOSIT_TO_BANK = "DEPOSIT_TO_BANK",
  WITHDRAW_FROM_BANK = "WITHDRAW_FROM_BANK",
  SELECT_ITEM_TO_MANAGE = "SELECT_ITEM_TO_MANAGE",
  TRANSFER_ITEM_TO_STASH = "TRANSFER_ITEM_TO_STASH",
  TRANSFER_ITEM_TO_TRENCH_COAT = "TRANSFER_ITEM_TO_TRENCH_COAT",
  START_CHASE = "START_CHASE",
  GET_CHASE = "GET_CHASE",
  RUN = "RUN",
  GET_CORN_DOGS = "GET_CORN_DOGS",
  RUN_OR_BRIBE = "RUN_OR_BRIBE",
  RUN_OR_BRIBE_CONTINUE = "RUN_OR_BRIBE_CONTINUE",
  HEAL = "HEAL",
  EVENT_CONTINUE = "EVENT_CONTINUE",
}

export const itemAllowableKeys = [
  "d",
  "h",
  "s",
  "f",
  "c",
  "m",
  "D",
  "H",
  "S",
  "F",
  "C",
  "M",
];

export const spaceBarKey = [" "];

export const runOrBribeKeys = ["r", "b", "R", "B"];

export const yOrN = ["y", "n", "Y", "N"];
