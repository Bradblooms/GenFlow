import { combineReducers } from "redux";


import modalReducer from "../modals/modalReducer";
import asyncReducer from "../async/asyncReducer";
import waterLevelReducers from "../waterLevel/waterLevelReducers"



const appReducer = combineReducers({
  modals: modalReducer,
  async: asyncReducer,
  waterLevel: waterLevelReducers
});
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;
