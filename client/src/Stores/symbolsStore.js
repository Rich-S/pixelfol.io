import { EventEmitter } from 'events';
import Dispatcher from '../Dispatchers';
import ActionTypes from '../Constants';

const CHANGE = 'CHANGE';
let symbols = [];
let fundKeys = [];
let playData = {
  "AAA": ["AAPL", "ABT", "ABBV", "ACHN", "ZTS", "JBSS", "MORN"],
  "BBB": ["AMZN", "CERN", "CMCSA", "DAL", "GIS", "KB", "MO", "T", "TU", "VRTX", "XLNX"],
  "CCC": ["FB", "GE", "GOOGL", "HD", "LVS", "MON", "MSFT", "TSLA", "V", "VZ", "XOM", "AGN", "AZO", "CRM", "CVS", "GOOG", "GILD", "MMM", "MNST", "NKE", "PYPL", "JPM", "SBUX"]
};

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
      default:
        break;
    }
  }
  // Adds a new item to the list and emits a CHANGED event.
  _addNewItem(item) {
    playData[item].forEach(d=>symbols.push(d));
    fundKeys.push(item);
    this.emit(CHANGE);
  }
  // Removes the item from the list and emits a CHANGED event.
  _removeItem(item) {
    symbols = arr_diff(symbols, playData[item]);
    fundKeys.splice(fundKeys.indexOf(item), 1);
    this.emit(CHANGE);
  }
  // Returns the current store's state.
  getAllItems() {
    return symbols;
  }
  getAllKeys() {
    return fundKeys;
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


function arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}
