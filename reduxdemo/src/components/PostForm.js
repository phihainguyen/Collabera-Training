import React, { Component } from 'react';
//connect will connect our component to the redux store, which was provided by our Provider componenet found insid our app.js file which is our parent wrapper
import { connect } from 'react-redux';

//then we also import in our actions which we replace the fetch method with
import { createPost } from '../actions/postActions';

import propTypes from 'prop-types';

class PostsForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		};
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}
	onChangeHandler(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	onSubmitHandler(event) {
		event.preventDefault();
		const post = {
			title: this.state.title,
			body: this.state.body
		};
		// fetch('https://jsonplaceholder.typicode.com/posts', {
		// 	method: 'POST',
		// 	headers: {
		// 		'content-type': 'application/json'
		// 	},
		// 	body: JSON.stringify(post)
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 	});

		//because we now have the action from redux, we now need to move the fetch method into our createPost method inside of our action
		//this will then allow us to connect to the redux store
		//instead of calling the fetch we call the action that we moved the fetch method to
		//now we call our action by:
		this.props.createPost(post);
		//we pass in the post object because that is the data we are getting from the client side when they submit the form, and that is what we will be passed to the fetch method to make that POST request
	}
	render() {
		return (
			<div>
				<h1>ADD POST</h1>
				<form onSubmit={this.onSubmitHandler}>
					<div>
						<label>Title:</label> <br />
						<input type="text" name="title" value={this.state.title} onChange={this.onChangeHandler} />
					</div>
					<div>
						<label>Body:</label>
						<br />
						<input type="text" name="body" value={this.state.body} onChange={this.onChangeHandler} />
					</div>
					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}
PostsForm.propTypes = {
	createPost: propTypes.func.isRequired
};
// export default PostsForm;
export default connect(null, { createPost })(PostsForm);
// by exporting connect instead of Posts, we are able to connect our actions to the redux store to get access to the state
//we will still be exporting our component Posts as seen above
// we will be passing in null, this is where we want to map our state to our properties
//and because there isn't anything to map through in our submitting form like how we were getting a bunch of objects in the array from our get request we dont need to create that object but just pass null
//the second parameter will be the fetchPosts action/function
