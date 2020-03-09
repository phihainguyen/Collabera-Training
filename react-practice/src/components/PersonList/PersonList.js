import React from 'react';
import Person from './Person/Person';
const personList = (props) =>
	props.persons.map((person, index) => {
		return (
			<Person
				nameChanged={(event) => props.changed(event, person.id)}
				key={person.id}
				name={person.name}
				age={person.age}
				click={() => props.clicked(index)}
			/>
		);
	});
export default personList;
