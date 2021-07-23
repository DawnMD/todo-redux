import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = (props) => {
	const todos = useSelector((state) => state.todos.todos);
	return (
		<ul className='grid w-full max-w-lg grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 md:grid-flow-row'>
			{todos.map((todo) => (
				<Todo key={todo.id} id={todo.id}>
					{todo.title}
				</Todo>
			))}
		</ul>
	);
};

export default TodoList;
