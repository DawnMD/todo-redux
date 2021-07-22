const Button = (props) => {
	const handleClick = (e) => {
		e.preventDefault();
		props.onClick();
	};
	return (
		<button
			onClick={handleClick}
			className='px-3 py-2 font-medium rounded-md shadow bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-emerald-600'>
			{props.children}
		</button>
	);
};
export default Button;
