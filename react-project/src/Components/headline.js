import React from 'react';

const Headline = (props) => {
	let element = React.createRef();

	function turnGreen() {
		element.current.style.backgroundColor = 'green';
	}

	return (
		<div ref={element}>
			<h1 onClick={turnGreen}>{props.title}</h1>
			{props.children}
		</div>
	);
};

export default Headline;
