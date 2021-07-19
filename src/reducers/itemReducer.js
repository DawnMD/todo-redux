import { ADD_ITEM_TO_CARD, REMOVE_ITEM_FROM_CARD } from '../actions/constants';
const addItem = (state = [], action) => {
	switch (action.type) {
		case ADD_ITEM_TO_CARD:
			return [...state, action.payload];
		case REMOVE_ITEM_FROM_CARD:
			return state.filter((item) => item !== action.payload);
		default:
			return state;
	}
};
export default addItem;
