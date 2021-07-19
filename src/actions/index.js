import { ADD_TODO, REMOVE_TODO } from './constants';
export const addTodo = (todoItem) => {
	return {
		type: ADD_TODO,
		payload: todoItem,
	};
};

export const removeTodo = (todoItem) => {
	return {
		type: REMOVE_TODO,
		payload: todoItem,
	};
};
