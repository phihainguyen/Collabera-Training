//by having this index.js file inside of the reducers folder we are able to import just a generic path to the folder without having to specifying the files name when importing to the store
//combineReducer is a function provided by redux which just combines all of the reducers we create into this one file as the rootReducer
import { combineReducers } from 'redux';

import postReducer from './postReducer';

export default combineReducers({
	posts: postReducer
});
