import { EventEmitter } from 'events';
import Dispatcher from '../Dispatchers';
import ActionTypes from '../Constants';
import toMatrix from '../Utilities/toMatrix';
import calcGridFit from '../Utilities/calcGridFit';

const fundHoldings = require('../assets/fundHoldings.json');
const CHANGE = 'CHANGE';

let symbols = [];
let fundKeys = [];//['AWSHX', VISVX', 'VTSMX'];

class SymbolsStore extends EventEmitter {
  constructor() {
    super();
    // Registers action handler with the Dispatcher.
    Dispatcher.register(this._registerToActions.bind(this));
    this.emit(CHANGE)
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
    if (fundHoldings[item]) {
      fundHoldings[item].forEach(d=>symbols.push(d));
      fundKeys.push(item);
      this.emit(CHANGE);
    }
  }
  // Removes the item from the list and emits a CHANGED event.
  _removeItem(item) {
    symbols = arr_diff(symbols, fundHoldings[item]);
    fundKeys.splice(fundKeys.indexOf(item), 1);
    this.emit(CHANGE);
  }
  getUniverse() {
    let allCaps = ['nano', 'micro', 'small', 'mid', 'large', 'mega'].map(d => JSON.parse(localStorage[d]))
    return [].concat.apply([], allCaps);
    //return JSON.parse(localStorage.universe);
  }
  getCap(capSize, width, height) {
    let data = JSON.parse(localStorage[capSize]);
    let dimension = Math.ceil(Math.sqrt(data.length));
    return { data: toMatrix(data, dimension), fit: dimension };
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
