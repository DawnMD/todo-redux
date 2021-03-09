import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import itemReducer from "./itemReducer";

export default combineReducers({
  card: cardReducer,
  item: itemReducer,
});
