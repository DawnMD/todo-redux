import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { addTodo, removeTodo } from './actions';
import Label from './components/Shared/UI/Label';
import Input from './components/Shared/UI/Input';
import DeleteIcon from './components/Shared/UI/DeleteIcon';

class App extends Component {
	submitHandle = (formProps) => {
		this.props.reset();
		this.props.addTodo(formProps.todo);
	};
	render() {
		return (
			<div className='flex flex-col items-center w-full gap-2'>
				<form
					className='flex flex-col items-center gap-2'
					onSubmit={this.props.handleSubmit(this.submitHandle)}>
					<Label htmlFor='todo'>Enter Todo</Label>
					<Input name='todo' placeholder='Enter todo' />
					<button
						type='submit'
						className='px-3 py-2 font-medium rounded-md shadow bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-emerald-600'>
						Add todo to list
					</button>
				</form>
				<div className='flex flex-col gap-2 w-72'>
					{this.props.todos.map((todo) => (
						<div
							className='flex justify-between w-full p-3 border rounded shadow'
							key={todo}>
							<p>{todo}</p>
							<button onClick={() => this.props.removeTodo(todo)}>
								<DeleteIcon />
							</button>
						</div>
					))}
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return { todos: state.todos };
};
export default compose(
	connect(mapStateToProps, { addTodo, removeTodo }),
	reduxForm({
		form: 'todoForm',
	})
)(App);
