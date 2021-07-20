import { Component } from 'react';
import Input from './Shared/UI/Input';
import Label from './Shared/UI/Label';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Button from './Shared/UI/Button';
class TodoForm extends Component {
	submitHandle = (formProps) => {
		this.props.reset();
		this.props.addTodo(formProps.todo);
	};
	render() {
		return (
			<form
				className='flex flex-col items-center gap-2 md:flex-row'
				onSubmit={this.props.handleSubmit(this.submitHandle)}>
				<Label htmlFor='todo'>Enter Todo</Label>
				<Input name='todo' placeholder='Enter todo' />
				<Button>Add todo</Button>
			</form>
		);
	}
}

export default compose(
	connect(null, { addTodo }),
	reduxForm({
		form: 'todoForm',
	})
)(TodoForm);
