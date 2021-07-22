import DeleteIcon from './Shared/UI/DeleteIcon';
import { todoActions } from '../redux/slice/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Shared/UI/Button';
import { useRef } from 'react';
const Todo = (props) => {
	const todoItemRef = useRef();
	const dispatch = useDispatch();
	const todos = useSelector((state) =>
		state.todos.todos.find((todo) => todo.id === props.id)
	);
	console.log(todos.todoItems);
	return (
		<li className='flex flex-col items-center w-full max-w-2xl gap-4 p-3 border rounded shadow md:gap-8'>
			<div className='flex items-center gap-2'>
				<h2 className='text-3xl font-bold'>{props.children}</h2>
				<DeleteIcon
					onClick={() => dispatch(todoActions.removeTodoCard(props.id))}
				/>
			</div>
			<form className='flex flex-col items-center gap-4 md:flex-row'>
				<label htmlFor='todoItem'>Add todo item</label>
				<input type='text' name='todoItem' id='todoItem' ref={todoItemRef} />
				<Button
					onClick={() =>
						dispatch(
							todoActions.addTodoItem({
								id: props.id,
								todoItem: todoItemRef.current.value,
							})
						)
					}>
					Add todo
				</Button>
			</form>
			<ul className='flex flex-col items-center w-full gap-3'>
				{todos.todoItems.map((todo) => (
					<li
						key={todo}
						className='flex justify-center w-full p-2 text-lg bg-gray-200 rounded shadow'>
						{todo}
					</li>
				))}
			</ul>
		</li>
	);
};
export default Todo;
