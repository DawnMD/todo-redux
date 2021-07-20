import { Component } from 'react';
import DeleteIcon from './Shared/UI/DeleteIcon';
import { connect } from 'react-redux';
import { removeTodo } from '../actions';
class Todo extends Component {
	render() {
		return (
			<li className='flex items-center justify-between w-full max-w-2xl p-3 border rounded shadow'>
				<h2 className='text-lg font-semibold'>
					{this.props.children.todoItem}
				</h2>
				<DeleteIcon
					onClick={() => this.props.removeTodo(this.props.children.todoItem)}
				/>
			</li>
		);
	}
}
export default connect(null, { removeTodo })(Todo);
