import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = (props) => {
	const todos = useSelector((state) => state.todos.todos);
	return (
		<ul className='flex flex-col items-center w-full gap-2'>
			{todos.map((todo) => (
				<Todo key={todo.id} id={todo.id}>
					{todo.title}
				</Todo>
			))}
		</ul>
	);
};

export default TodoList;
