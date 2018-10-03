import Dispatcher from '../Dispatchers';
import ActionTypes from '../Constants';

class SymbolsActions {
  addNewItem(item) {
    // Note: This is usually a good place to do API calls.
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_NEW_ITEM,
      payload: item
    });
  }
  removeItem(item) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE_ITEM,
      payload: item
    })
  }
}

export default new SymbolsActions();
