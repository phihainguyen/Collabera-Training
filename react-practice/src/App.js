import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{
				name: 'Max',
				age: 22
			},
			{
				name: 'Mark',
				age: 24
			},
			{
				name: 'Molly',
				age: 17
			}
		]
	};
	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{
					name: newName,
					age: 22
				},
				{
					name: 'Joe',
					age: 24
				},
				{
					name: 'Jacky',
					age: 17
				}
			]
		});
	};

	nameChangeHandler = (event) => {
		this.setState({
			persons: [
				{
					name: 'Max',
					age: 22
				},
				{
					name: event.target.value,
					age: 24
				},
				{
					name: 'Jacky',
					age: 17
				}
			]
		});
	};
	//we can look at the 2 Person tags that binds the this keyword and both does the same thing, they are both able to pass through the props referencing the correct this, thanks to arrow function able to inherits its lexical scope "this", even though it may be easier to write it can be inefficient and make yur app slow, since it may make your app rerender a lot
	render() {
		const styles = {
			backgroundColor: 'yellow',
			padding: '10px',
			fontSize: '20px',
			borderRadius: '7px',
			cursor: 'pointer'
		};
		const style2 = {
			...styles,
			color: 'black'
		};
		return (
			<div className="App">
				<header className="App-header">
					<button style={styles} onClick={() => this.switchNameHandler('Monkey D Luffy')}>
						Switch Name
					</button>
					<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
					<Person
						name={this.state.persons[1].name}
						age={this.state.persons[1].age}
						click={this.switchNameHandler.bind(this, 'Marshall D Teach')}
						nameChanged={this.nameChangeHandler}
					>
						<p style={style2}>you can also click me to switch </p>
					</Person>
					<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
