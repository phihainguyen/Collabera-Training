import React, { Component } from 'react';

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
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(post)
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
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

export default PostsForm;
