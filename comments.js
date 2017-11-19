
import {ADD_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {DELETE_COMMENT} from './actions';
import {ADD_LIKE_TO_COMMENT} from './actions';
import {ADD_UNLIKE_TO_COMMENT} from './actions'

function reducer(state = initialState, action) {
	switch(action.type) {
		case ADD_COMMENT:
			return Object.assign({}, state, {
				comments: [
				{
					id: action.id,
					text: action.text,
					votes: 0
				}
				, ...state]
			});
		case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case EDIT_COMMENT:
        	return state.comments.filter(comment => {
        		if (comment.id === action.id) {
        			comment.text = acton.text;
        		}
        	});
        case ADD_LIKE_TO_COMMENT:
        	return state.map(comment => {
        		if (comment.id === action.id) {
        			return Object.assign({}, comment, {
        				votes: comment.votes + 1
        			});
        		}
        	});
        case ADD_UNLIKE_TO_COMMENT:
        	return state.map(comment => {
        		if (comment.id === action.id) {
        			return Object.assign({}, comment, {
        				votes: comment.votes - 1
        			});
        		};
        	});
        	
		default:
			return state;
	}
}

export default comments;