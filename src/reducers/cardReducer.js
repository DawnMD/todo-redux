import { ADD_CARD,REMOVE_CARD } from "../actions/constants";
const addCard = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case REMOVE_CARD:
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};
export default addCard;
