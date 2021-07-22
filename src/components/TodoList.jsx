import Todo from './Todo';

const TodoList = (props) => {
	return (
		<ul className='flex flex-col items-center w-full gap-2'>
			{props.todos.map((todo) => (
				<Todo key={todo.id}>{todo}</Todo>
			))}
		</ul>
	);
};

export default TodoList;
