import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
	submitHandle = (formProps) => {
		this.props.reset();
		this.props.addTodo(formProps.todo);
	};
	render() {
		return (
			<div className='flex flex-col items-center gap-6'>
				<h1 className='text-3xl font-bold tracking-tight'>
					TODO list using Redux
				</h1>
				<TodoForm />
				<TodoList />
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return { todos: state.todos };
};
export default connect(mapStateToProps)(App);
