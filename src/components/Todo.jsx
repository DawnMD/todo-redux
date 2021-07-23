import DeleteIcon from './Shared/UI/DeleteIcon';
import { todoActions } from '../redux/slice/todoSlice';
import { useDispatch } from 'react-redux';
import Button from './Shared/UI/Button';
import { useRef } from 'react';
import TodoItemList from './TodoItemList';
const Todo = (props) => {
	const todoItemRef = useRef();
	const dispatch = useDispatch();
	return (
		<li className='flex flex-col items-center gap-4 p-3 border rounded shadow md:gap-8'>
			<div className='flex items-center gap-2'>
				<h2 className='text-3xl font-bold'>{props.children}</h2>
				<DeleteIcon
					onClick={() => dispatch(todoActions.removeTodoCard(props.id))}
				/>
			</div>
			<form className='flex flex-col items-center gap-4 '>
				<label htmlFor='todoItem'>Add todo item</label>
				<input
					type='text'
					name='todoItem'
					id='todoItem'
					ref={todoItemRef}
					className='rounded shadow'
				/>
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
			<hr className='w-full border border-gray-200 shadow-sm' />
			<TodoItemList id={props.id} />
		</li>
	);
};
export default Todo;
