import {ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, ADD_LIKE_TO_COMMENT, ADD_UNLIKE_TO_COMMENT} from './actions';

function reducer(state = [], action) {
	switch(action.type) {
		
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action.text,
				votes: 0
			}
			, ...state];

		case DELETE_COMMENT:
			return state.filter(comment => comment.id !== action.id);

		case EDIT_COMMENT:
			return state.map(comment => {
				return comment.id === action.id ? Object.assign({}, comment, { text: action.text }) : comment });

		case ADD_LIKE_TO_COMMENT:
			return state.map(comment => { 
				return comment.id === action.id ? Object.assign({}, comment, { votes: comment.votes + 1 }) : comment });

		case ADD_UNLIKE_TO_COMMENT:
			return state.map(comment => { 
				return comment.id === action.id ? Object.assign({}, comment, { votes: comment.votes - 1 }) : comment });

		default:
			return state;
	}
}

export default comments;