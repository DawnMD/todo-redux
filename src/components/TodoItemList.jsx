import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
const TodoItemList = (props) => {
	const todos = useSelector((state) =>
		state.todos.todos.find((todo) => todo.id === props.id)
	);
	return (
		<ul className='flex flex-col items-center w-full gap-3'>
			{todos.todoItems.map((todo) => (
				<TodoItem key={todo.id} todo={todo} id={props.id} />
			))}
		</ul>
	);
};
export default TodoItemList;
