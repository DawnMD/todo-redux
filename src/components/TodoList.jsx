import { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoList extends Component {
	render() {
		return (
			<ul className='flex flex-col items-center w-full gap-2'>
				{this.props.todos.map((todo) => (
					<Todo key={todo.id}>{todo}</Todo>
				))}
			</ul>
		);
	}
}
const mapStateToProps = (state) => {
	return { todos: state.todos };
};
export default connect(mapStateToProps)(TodoList);
