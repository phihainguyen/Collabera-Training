import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
	items: [],
	item: {}
};

//this function we are exporting here will be the evaluater on what 'types' we will be dealing with from the type file
//the function will take in 2 parameters
//it will take the state which is the initial state we set
//the action is the second parameter
//because the action will include the type it is key for letting this function evaluate the types we are working with
//hence we use the switch case ethod to figure out the type and we pass action which is an object which is why we are able to do action.type because it will have a type which will be one of the types we created inside the types file
//if the action also includes data and not just types it will also have a payload
export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			// console.log('dipatched to reducer');
			return {
				...state,
				items: action.payload
			};
		case NEW_POST:
			return {
				...state,
				item: action.payload
			};
		//item will be the payload here since in the rootreducer we have item(s) and item, for a single post and because for the createPost action we only want the payload to be sent to the single item in the rootreducer
		default:
			return state;
	}
}

//inisde our post reducers we will import our two types from our types files located in our action folder
//by creating our initialState in our postReducer we are basically creating an object stored in our initial state variable
//the object will contatin the items[] array which are the posts we will be recieve from our actions
// action is where we will be putting the fetch request
//the next key we place into our initialState object will be the item{} object which is basically the single post that we will get from the post user post on the form from client side
