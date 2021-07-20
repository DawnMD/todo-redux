const Label = (props) => {
	return (
		<label
			htmlFor={props.htmlFor}
			className='text-xl font-semibold text-gray-800'>
			{props.children}
		</label>
	);
};
export default Label;
