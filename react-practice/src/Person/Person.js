import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props) => {
	//below is an example of using media queries with importing Radium, and you will need to import Radium in your main js file as well as the StyleRoot Extension which you will need to wrap everything inside of StyleRoot Tag
	const style = {
		'@media (min-width:500px)': {
			width: '450px'
		}
	};
	return (
		<div className="Person" style={style}>
			<h1 onClick={props.click}>{props.name}</h1>
			<p>{props.age}</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.nameChanged} value={props.name} />
		</div>
	);
};
export default Radium(person);
