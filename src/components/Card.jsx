import Input from './Shared/UI/Input';
import { reduxForm } from 'redux-form';
import Label from './Shared/UI/Label';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Button from './Shared/UI/Button';
import { Component } from 'react';
import { removeCard, addItemToCard } from '../actions';
import DeleteIcon from './Shared/UI/DeleteIcon';

class Card extends Component {
	onItemSubmit = (formProps) => {
		this.props.reset();
		this.props.addItemToCard(formProps.todo);
	};
	render() {
		console.log(this.props.items);
		return (
			<div className='flex flex-col items-center max-w-lg gap-2 p-2 rounded shadow bg-gray-50'>
				<div className='flex items-center gap-4'>
					<h3 className='text-xl font-medium'>{this.props.cardName}</h3>
					<button
						type='button'
						className='p-2 bg-red-500 rounded shadow'
						onClick={() => this.props.removeCard(this.props.cardName)}>
						<DeleteIcon />
						<span className='sr-only'>Delete todo item</span>
					</button>
				</div>

				<form
					className='flex items-center justify-center gap-2'
					onSubmit={this.props.handleSubmit(this.onItemSubmit)}>
					<Label htmlFor='todo'>Enter todo item</Label>
					<Input name='todo' placeholde='Enter todo' />
					<Button>Add Todo</Button>
				</form>
				<div>
					{this.props.items &&
						this.props.items.map((item) => <div>{item.todo}</div>)}
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	const items = state.item.sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1));

	return {
		items,
	};
};
export default compose(
	connect(mapStateToProps, { removeCard, addItemToCard }),
	reduxForm({ form: 'card' })
)(Card);
