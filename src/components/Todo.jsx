import DeleteIcon from './Shared/UI/DeleteIcon';
import { todoActions } from '../redux/slice/todoSlice';
import { useDispatch } from 'react-redux';
import Button from './Shared/UI/Button';
import { useRef } from 'react';
const Todo = (props) => {
	const todoItemRef = useRef();
	const dispatch = useDispatch();
	return (
		<li className='flex flex-col items-center w-full max-w-2xl gap-8 p-3 border rounded shadow'>
			<div className='flex items-center gap-2'>
				<h2 className='text-3xl font-bold'>{props.children}</h2>
				<DeleteIcon
					onClick={() => dispatch(todoActions.removeTodoCard(props.id))}
				/>
			</div>
			<form className='flex items-center gap-4'>
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
		</li>
	);
};
export default Todo;
