import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
const todoSlice = createSlice({
	name: 'todo',
	initialState: { todos: [] },
	reducers: {
		addTodoCard: (state, action) => {
			const title = action.payload;
			const existingTodo = state.todos.find((todo) => todo.title === title);
			if (!existingTodo) {
				state.todos.push({
					id: nanoid(2),
					title: title,
					todoItems: [],
				});
			} else {
				return;
			}
		},
		removeTodoCard: (state, action) => {
			const id = action.payload;
			const existingTodo = state.todos.find((todo) => todo.id === id);
			if (existingTodo) {
				state.todos = state.todos.filter((todo) => todo.id !== id);
			} else {
				return;
			}
		},
		addTodoItem: (state, action) => {
			const id = action.payload.id;
			const item = action.payload.todoItem;
			const todoObj = state.todos.find((todo) => todo.id === id);
			if (todoObj) {
				todoObj.todoItems.unshift({
					id: nanoid(2),
					item,
					isCompleted: false,
				});
			} else {
				return;
			}
		},
		removeTodoItem: (state, action) => {
			const id = action.payload.id;
			const todoId = action.payload.todoId;
			const todoObj = state.todos.find((todo) => todo.id === id);
			if (todoObj) {
				todoObj.todoItems = todoObj.todoItems.filter(
					(todo) => todo.id !== todoId
				);
			} else {
				return;
			}
		},
		completeTodoItem: (state, action) => {
			const id = action.payload.id;
			const todoId = action.payload.todoId;
			const todoObj = state.todos.find((todo) => todo.id === id);
			if (todoObj) {
				const todoItems = todoObj.todoItems.find((todo) => todo.id === todoId);
				todoItems.isCompleted = true;
			} else {
				return;
			}
		},
	},
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
