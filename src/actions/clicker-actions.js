import * as constants from '../constants';

/**
 * Save clicks
 * @param {int} clicks
 * @param {int} id
 * @returns {Promise}
 */
export function saveClicks(clicks, id) {
  return (dispatch) => {
    dispatch({
      type: constants.CLICKS_SAVED,
      payload: { clicks, id },
    });
  }
}

/**
 * Save clicker has changed to global state in order for the entire app to know about changes
 * @param {bool} hasChanged
 * @param {int} id
 * @returns {Promise}
 */
export function setClickerHasChanged(hasChanged, id) {
  return (dispatch) => {
    dispatch({
      type: constants.CLICKER_HAS_CHANGED,
      payload: { hasChanged, id },
    });
  };
}

/**
 * Clear global hasChanged state
 * @returns {Promise}
 */
export function clearClickerChanges() {
  return (dispatch) => {
    dispatch({
      type: constants.CLICKER_CHANGES_CLEARED,
    });
  };
}



/**
 * Adds save function to a global array of save functions, each of which will fire when the CONFIRM AND POST ALL button is pressed. :)
 * @param {function} callback
 * @param {id} id
 * @returns {Promise}
 */
export function registerSaveCallback(callback, id) {
  return (dispatch) => {
    dispatch({
      type: constants.SAVE_CALLBACK_REGISTERED,
      payload: { callback, id },
    });
  };
}

/**
 * Removes save function to a global array of save functions, each of which will fire when the CONFIRM AND POST ALL button is pressed. :)
 * @param {id} id - operatorId
 * @returns {Promise}
 */
export function deregisterSaveCallback(id) {
  return (dispatch) => {
    dispatch({
      type: constants.SAVE_CALLBACK_DEREGISTERED,
      payload: { id },
    });
  };
}


/**
 * Save all clickers - fire all registered save callbacks
 * @param {function} saveCallback
 * @returns {Promise}
 */
export function saveAll() {
  return (dispatch, getState) => {
    // first, clear global hasChanged state
    dispatch(clearClickerChanges());
    // get clickers
    const clickers = getState().clickers;
    // iterate through clicker and fire its _save callback method
    clickers.forEach(clicker => {
      // fire save method but pass false to reloadBalanceSheet
      clicker.saveCallback(false);
    });
  };
}