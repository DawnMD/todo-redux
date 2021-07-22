import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Shared/UI/Button';
import { todoActions } from '../redux/slice/todoSlice';
const TodoForm = () => {
	const todoCardRef = useRef();
	const dispatch = useDispatch();
	return (
		<form className='flex flex-col items-center gap-2 md:flex-row'>
			<label htmlFor='todoCard' className='text-xl font-semibold text-gray-800'>
				Enter todo card
			</label>
			<input
				if='todoCard'
				placeholder='Grocery'
				type='text'
				className='rounded-md shadow'
				ref={todoCardRef}
			/>
			<Button
				onClick={() =>
					dispatch(todoActions.addTodoCard(todoCardRef.current.value))
				}>
				Add todo
			</Button>
		</form>
	);
};

export default TodoForm;
