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
					title,
					todoItems: [],
				});
			} else {
				return;
			}
		},
	},
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
