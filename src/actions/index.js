import { ADD_TODO, REMOVE_TODO } from './constants';
import uuid from 'uuid-random';
export const addTodo = (todoItem) => {
	return {
		type: ADD_TODO,
		payload: {
			id: uuid(),
			todoItem,
		},
	};
};

export const removeTodo = (todoItem) => {
	return {
		type: REMOVE_TODO,
		payload: todoItem,
	};
};
