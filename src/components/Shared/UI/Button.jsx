import { Component } from 'react';

class Button extends Component {
	render() {
		return (
			<button
				type='submit'
				className='px-3 py-2 bg-emerald-500 rounded-md shadow font-medium hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-emerald-600'>
				{this.props.children}
			</button>
		);
	}
}
export default Button;
