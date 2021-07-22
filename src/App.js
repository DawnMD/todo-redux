import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
	return (
		<div className='flex flex-col items-center gap-6'>
			<h1 className='text-3xl font-bold tracking-tight'>
				TODO list using Redux
			</h1>
			<TodoForm />
			{/* <TodoList /> */}
		</div>
	);
};

export default App;
