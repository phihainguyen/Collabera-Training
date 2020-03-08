import React from 'react';
import './Person.css';
const person = (props) => {
	return (
		<div className="Person">
			<h1>{props.name}</h1>
			<p>{props.age}</p>
			<p onClick={props.click}>{props.children}</p>
			<input type="text" onChange={props.nameChanged} value={props.name} />
		</div>
	);
};
export default person;
