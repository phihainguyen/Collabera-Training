import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//the Provider is important and acts like the glue that holds redux and react together
//Provider take in the store and the store is what holds the state
import { Provider } from 'react-redux';
import store from './store';
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
