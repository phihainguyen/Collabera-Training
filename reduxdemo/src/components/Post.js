import React, { Component } from 'react';
//connect will connect our component to the redux store, which was provided by our Provider componenet found insid our app.js file which is our parent wrapper
import { connect } from 'react-redux';
//below is one of the actions we have created which we will now import into our post components
import { fetchPosts } from '../actions/postActions';

import propTypes from 'prop-types';

class Posts extends Component {
	//because we now are managing our state inside of redux, we no longer need the constructor in this class
	//the posts inside of our state below will now come from redux's state from the store
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		posts: []
	// 	};
	// }
	//we wont need the fetch functions here either to grab the API because it will be inside of our action folder now
	// componentWillMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/posts')
	// 		.then((response) => response.json())
	// 		.then((data) => this.setState({ posts: data }));
	// }

	componentWillMount() {
		this.props.fetchPosts();
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.newPost) {
			this.props.posts.unshift(nextProps.newPost);
		}
	}
	render() {
		const postItems = this.props.posts.map((post) => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		);
	}
}

Posts.protoType = {
	fetchPosts: propTypes.func.isRequired,
	posts: propTypes.array.isRequired,
	newPost: propTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	posts: state.posts.items,
	newPost: state.posts.item
});

// export default Posts;
export default connect(mapStateToProps, { fetchPosts })(Posts);
// by exporting connect instead of Posts, we are able to connect our actions to the redux store to get access to the state
//we will still be exporting our component Posts as seen above
// we will be passing in null, this is where we want to map our state to our properties
//so we then create our mapStateToProps functions which inturns maps out our items and updates the posts, which we have labeled that name specifically in our root reducer found in the index.js file inside the reducers folder
//the second parameter will be the fetchPosts action/function
