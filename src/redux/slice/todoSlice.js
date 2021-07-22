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
				todoObj.todoItems.unshift(item);
			} else {
				return;
			}
		},
		removeTodoItem: (state, action) => {
			const id = action.payload.id;
			const item = action.payload.todoItem;
			const Todo = state.todos.find((todo) => todo.id === id);
			if (Todo) {
				Todo.todoItems = Todo.todoItems.filter((todo) => todo !== item);
			} else {
				return;
			}
		},
	},
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
