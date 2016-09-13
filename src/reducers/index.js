import * as constants from '../constants';
//import * as _ from 'lodash';

const initialState = {
  clickers: [
    {
      id: 0,
      clicks: 0,
      hasChanged: false,
      saveCallback: null,
    },
    {
      id: 1,
      clicks: 0,
      hasChanged: false,
      saveCallback: null,
    },
    {
      id: 2,
      clicks: 0,
      hasChanged: false,
      saveCallback: null,
    },
    {
      id: 3,
      clicks: 0,
      hasChanged: false,
      saveCallback: null,
    },
  ],
};

export default (state = initialState, action) => {
  let x; // just a dummy variable so that we can use block-scoping inside of the switch statement
  switch (action.type) {

    case constants.CLICKS_SAVED:
      x = state.clickers.map((clicker) => {
        if (clicker.id === action.payload.id) {
          const clicks = clicker.clicks + action.payload.clicks;
          return { ...clicker, clicks };
        } else {
          return clicker;
        }
      });    
      return {
        ...state,
        clickers: x,
      };

    case constants.CLICKER_HAS_CHANGED:
      x = state.clickers.map((clicker) => {
        if (clicker.id === action.payload.id) {
          return { ...clicker, hasChanged: action.payload.hasChanged };
        } else {
          return clicker;
        }
      });
      return {
        ...state,
        clickers: x,
      };

    case constants.CLICKER_CHANGES_CLEARED:
      x = state.clickers.map((clicker) => {
        return { ...clicker, hasChanged: false };
      });
      return {
        ...state,
        clickers: x,
      };

    case constants.SAVE_CALLBACK_REGISTERED:
      x = state.clickers.map((clicker) => {
        if (clicker.id === action.payload.id) {
          const saveCallback = action.payload.callback;
          return { ...clicker, saveCallback };
        } else {
          return clicker;
        }
      });
      return {
        ...state,
        clickers: x,
      };

    case constants.SAVE_CALLBACK_DEREGISTERED:
      x = state.clickers.map((clicker) => {
        if (clicker.id === action.payload.id) {
          return { ...clicker, saveCallback: null };
        } else {
          return clicker;
        }
      });
      return {
        ...state,
        clickers: x,
      };

    default:
      return state;
  }
};