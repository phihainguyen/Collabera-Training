import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => (dispatch) => {
	// console.log('fetching');
	fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((posts) =>
		// this.setState({ posts: data })
		//the setState is no longer needed to update the state since we will be dispatching the information to the reducer
		//dispatch will take in an object as the arguments
		//the object will contain the type as well as the data we want to send to the reducer
		//here we call the response data from the fetch request as 'posts' because theyre a bunch of API posts that we are recieving, and we label the data we want to send to the reducer as the payload since we know that payload is the property that holds our data
		dispatch({
			type: FETCH_POSTS,
			payload: posts
		})
	);
};

//once we have our action that we want to perform the next step is to dispatch the data/info to the reducer

//NOW we can create another actions for submitting a post and because we are submitting information we will pass something in the parameter calling it postData in our case
export const createPost = (postData) => (dispatch) => {
	// console.log('fetching');
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(postData)
	})
		.then((res) => res.json())
		.then((singlepost) => {
			// console.log(data);
			//like above instead of the console.log we will send the data we want to submit and throw it into the dispatch so it can be dispatched to the redux store
			//we will send the correct type as well as the correct payload
			dispatch({
				type: NEW_POST,
				payload: singlepost
			});
		});
};
//and now since we have a new action we must go to the reducer and update the case for the action that we have created
