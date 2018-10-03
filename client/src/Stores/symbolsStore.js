import { EventEmitter } from 'events';
import Dispatcher from '../Dispatchers';
import ActionTypes from '../Constants';

const CHANGE = 'CHANGE';
let symbols = [];

class SymbolsStore extends EventEmitter {
  constructor() {
    super();
    // Registers action handler with the Dispatcher.
    Dispatcher.register(this._registerToActions.bind(this));
  }
  // Switches over the action's type when an action is dispatched.
  _registerToActions(action) {
    switch(action.actionType) {
      case ActionTypes.ADD_NEW_ITEM:
      this._addNewItem(action.payload);
      break;
      case ActionTypes.REMOVE_ITEM:
      this._removeItem(action.payload);
      break;
    }
  }
  // Adds a new item to the list and emits a CHANGED event.
  _addNewItem(item) {
    symbols = {"AAAGX": [
    "LVS",
    "ABT",
    "XLNX",
    "VRTX",
    "DAL",
    "CERN",
    "CMCSA",
    "MSFT",
    "MMM",
    "NKE",
    "CVS",
    "PYPL",
    "JPM",
    "SBUX",
    "GOOG",
    "AZO",
    "AGN",
    "CRM",
    "GILD",
    "HD",
    "AAPL",
    "GOOGL",
    "V",
    "FB",
    "AMZN"
  ]}[item];
    //symbols.push(item);
    this.emit(CHANGE);
  }
  // Removes the item from the list and emits a CHANGED event.
  _removeItem(item) {
    symbols = [];
    //symbols.splice(symbols.indexOf(item), 1);
    this.emit(CHANGE);
  }
  // Returns the current store's state.
  getAllItems() {
    return symbols;
  }
  // Hooks a React component's callback to the CHANGED event.
  addChangeListener(callback) {
    this.on(CHANGE, callback);
  }
  // Removes the listener from the CHANGED event.
  removeChangeListener(callback) {
    this.removeListener(CHANGE, callback);
  }
}

export default new SymbolsStore();
