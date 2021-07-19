import React, { Component } from 'react';
import { addCard, removeCard } from './actions';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import Button from './components/Shared/UI/Button';
import Input from './components/Shared/UI/Input';
import Label from './components/Shared/UI/Label';
import Card from './components/Card';

class App extends Component {
	addCardHandler = (formProps) => {
		this.props.reset();
		this.props.addCard(formProps.card);
	};
	render() {
		return (
			<div className='flex flex-col gap-6'>
				<form
					onSubmit={this.props.handleSubmit(this.addCardHandler)}
					className='flex items-center justify-center gap-3'>
					<Label htmlFor='card'>Enter card name</Label>
					<Input name='card' placeholder='Card Name' />
					<Button>Add Card</Button>
				</form>
				<div className='flex flex-col items-center gap-6'>
					<h2 className='text-2xl font-semibold text-center'>TODO Cards</h2>
					<div className='flex flex-col gap-4'>
						{this.props.cards &&
							this.props.cards.map((card) => (
								<Card cardName={card} key={card} />
							))}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { cards: state.card, state };
};

export default compose(
	connect(mapStateToProps, { addCard, removeCard }),
	reduxForm({
		form: 'addCard',
	})
)(App);
