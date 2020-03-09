import React from 'react';
import './cockpit.css';
import styled from 'styled-components';

const cockpit = (props) => {
	const StyledButton = styled.button`
		background-color: ${(props) => (props.alter ? 'red' : 'green')};
		color: white;
		padding: 10px;
		font-size: 20px;
		border-radius: 7px;
		cursor: pointer;
		margin: 10px;

		&:hover {
			background-color: ${(props) => (props.alter ? 'salmon' : 'lightgreen')};
		}
	`;
	let classes = [];
	if (props.persons.length <= 2) {
		classes.push('red');
	}
	if (props.persons.length <= 1) {
		classes.push('bold');
	}
	return (
		<div>
			<p className={classes.join(' ')}>This is Working!</p>
			<StyledButton onClick={() => props.switchNameHandler('Monkey D Luffy')}>Switch Name</StyledButton>
			<StyledButton alter={props.showPerson} onClick={props.clicked}>
				Toggle People
			</StyledButton>
		</div>
	);
};
export default cockpit;
