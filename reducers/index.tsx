import { combineReducers } from "redux";
import checkReducer from "../pages/checking/reducer";
import signInReducer from "../pages/login/reducer";
const rootReducers = combineReducers({
  checkReducer,
  signInReducer
});
export default rootReducers;
