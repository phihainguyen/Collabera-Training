import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
	state = {
		persons: [
			{
				name: 'Max',
				id: 1,
				age: 22
			},
			{
				name: 'Mark',
				id: 2,
				age: 24
			},
			{
				name: 'Molly',
				id: 3,
				age: 17
			}
		]
	};
	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{
					name: newName,
					id: 1,
					age: 22
				},
				{
					name: 'Joe',
					id: 2,
					age: 24
				},
				{
					name: 'Jacky',
					id: 3,
					age: 17
				}
			],
			showPerson: true
		});
	};

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});
		const person = { ...this.state.persons[personIndex] };
		//below is the second way to cope the object without mutating state
		// const person = Object.assign({}, this.state.persons[personIndex]);

		person.name = event.target.value;

		const persons = [ ...this.state.persons ];
		persons[personIndex] = person;

		this.setState({ persons: persons });
		// this.setState({
		// 	persons: [
		// 		{
		// 			name: 'Max',
		// 			age: 22
		// 		},
		// 		{
		// 			name: event.target.value,
		// 			age: 24
		// 		},
		// 		{
		// 			name: 'Jacky',
		// 			age: 17
		// 		}
		// 	]
		// });
	};
	togglePerson = () => {
		const doesShow = this.state.showPerson;

		this.setState({ showPerson: !doesShow });
	};
	deletePersonHandler = (personIndex) => {
		// const person = this.state.persons.slice();
		const person = [ ...this.state.persons ];

		person.splice(personIndex, 1);
		this.setState({ persons: person });
	};
	//we can look at the 2 Person tags that binds the this keyword and both does the same thing, they are both able to pass through the props referencing the correct this, thanks to arrow function able to inherits its lexical scope "this", even though it may be easier to write it can be inefficient and make yur app slow, since it may make your app rerender a lot
	render() {
		const styles = {
			backgroundColor: 'green',
			color: 'white',
			padding: '10px',
			fontSize: '20px',
			borderRadius: '7px',
			cursor: 'pointer',
			margin: '10px',
			':hover': {
				backgroundColor: 'lightgreen'
			}
		};
		let person;
		if (this.state.showPerson) {
			person = (
				<div className="personContainer">
					{this.state.persons.map((person, index) => {
						return (
							<Person
								nameChanged={(event) => this.nameChangeHandler(event, person.id)}
								key={person.id}
								name={person.name}
								age={person.age}
								click={() => this.deletePersonHandler(index)}
							/>
						);
					})}
				</div>
			);
			styles.backgroundColor = 'red';
			styles[':hover'] = {
				backgroundColor: 'salmon'
			};
		} else {
			person = null;
		}
		let classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red');
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}
		return (
			<div className="App">
				<header className="App-header">
					<p className={classes.join(' ')}>This is Working!</p>
					<button key={'nameChanger'} style={styles} onClick={() => this.switchNameHandler('Monkey D Luffy')}>
						Switch Name
					</button>
					<button key={'toggle'} onClick={this.togglePerson} style={styles}>
						Toggle People
					</button>
					{person}
				</header>
			</div>
		);
	}
}

export default App;

//above is an example of class componenet and below is an example of functional component
// const App = (props) => {
// 	const [ personsState, setPersonsState ] = useState({
// 		persons: [
// 			{
// 				name: 'Max',
// 				age: 22
// 			},
// 			{
// 				name: 'Mark',
// 				age: 24
// 			},
// 			{
// 				name: 'Molly',
// 				age: 17
// 			}
// 		]
// 	});
// 	const switchNameHandler = () => {
// 		setPersonsState({
// 			persons: [
// 				{
// 					name: 'John',
// 					age: 22
// 				},
// 				{
// 					name: 'Joe',
// 					age: 24
// 				},
// 				{
// 					name: 'Jacky',
// 					age: 17
// 				}
// 			]
// 		});
// 	};

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<button onClick={switchNameHandler}>Switch Name</button>

// 				<Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
// 				<Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
// 				<Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
// 			</header>
// 		</div>
// 	);
// };

// export default App;
