import { ADD_TODO, REMOVE_TODO } from '../actions/constants';
const todoReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [action.payload, ...state];
		case REMOVE_TODO:
			return state.filter((item) => item.todoItem !== action.payload);
		default:
			return state;
	}
};
export default todoReducer;
