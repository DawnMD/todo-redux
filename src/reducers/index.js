import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import itemReducer from "./itemReducer";
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
  card: cardReducer,
  item: itemReducer,
  form: formReducer,
});
