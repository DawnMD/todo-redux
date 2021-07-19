import { Component } from 'react';
import { Field } from 'redux-form';

class Input extends Component {
	render() {
		return (
			<Field
				name={this.props.name}
				component='input'
				type='text'
				placeholder={this.props.placeholder}
				className='rounded-md shadow'
			/>
		);
	}
}
export default Input;
