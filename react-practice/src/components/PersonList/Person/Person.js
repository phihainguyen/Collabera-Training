import React from 'react';
import styled from 'styled-components';
// import './Person.css';
// import Radium from 'radium';
const person = (props) => {
	//below is an example of using media queries with importing Radium, and you will need to import Radium in your main js file as well as the StyleRoot Extension which you will need to wrap everything inside of StyleRoot Tag
	const StyleDiv = styled.div`
		width: 60%;
		margin: auto;
		border: 1px solid #eee;
		padding: 10px;
		box-shadow: 0 2px 3px #ccc;

		'@media (min-width:500px)': {
			width: '450px';
		}
	`;

	return (
		<StyleDiv>
			<h1 onClick={props.click}>{props.name}</h1>
			<p>{props.age}</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.nameChanged} value={props.name} />
		</StyleDiv>
	);
};
export default person;
