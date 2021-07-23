import { useDispatch } from 'react-redux';
import { todoActions } from '../redux/slice/todoSlice';
import CompletedIcon from './Shared/UI/CompletedIcon';
import RemoveItem from './Shared/UI/RemoveItem';
const TodoItem = (props) => {
	const dispatch = useDispatch();
	return (
		<li className='flex items-center justify-between w-full p-2 text-lg bg-gray-200 rounded shadow'>
			<p className={props.todo.isCompleted ? `line-through` : ``}>
				{props.todo.item}
			</p>
			<div className='flex items-center'>
				<CompletedIcon
					onClick={() =>
						dispatch(
							todoActions.completeTodoItem({
								todoId: props.todo.id,
								id: props.id,
							})
						)
					}
				/>
				<RemoveItem
					onClick={() =>
						dispatch(
							todoActions.removeTodoItem({
								todoId: props.todo.id,
								id: props.id,
							})
						)
					}
				/>
			</div>
		</li>
	);
};
export default TodoItem;
