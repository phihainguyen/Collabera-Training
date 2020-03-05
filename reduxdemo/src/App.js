import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//the Provider is important and acts like the glue that holds redux and react together
//Provider take in the store and the store is what holds the state
import { Provider } from 'react-redux';
//the STORE is a globablize State which holds all the state in one place
import store from './store';
//ACTIONS is basically all the things you want to do in your app in our case we have 2 actions below
//one for the GET and one for the POST request
import Posts from './components/Post';
import PostForm from './components/PostForm';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<PostForm />
						<Posts />
					</header>
				</div>
			</Provider>
		);
	}
}

export default App;
