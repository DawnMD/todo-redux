const Label = (props) => {
	return (
		<label htmlFor={props.htmlFor} className='text-gray-800 font-medium'>
			{props.children}
		</label>
	);
};
export default Label;
