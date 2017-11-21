
import {ADD_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {DELETE_COMMENT} from './actions';
import {ADD_LIKE_TO_COMMENT} from './actions';
import {ADD_UNLIKE_TO_COMMENT} from './actions'

function reducer(state = [], action) {
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
            return [ state.filter(comment => comment.id !== action.id)];

        case EDIT_COMMENT:
        	return [ state.map(comment => {
        		return comment.id === action.id ? Object.assign({}, comment, { text: action.text }) : comment })
        ];
        
        case ADD_LIKE_TO_COMMENT:
        	return [ state.map(comment => { 
        		return comment.id === action.id ? Object.assign({}, comment, { votes: comment.votes + 1 }) : comment })
        ];

        case ADD_UNLIKE_TO_COMMENT:
			return [ state.map(comment => { 
        		return comment.id === action.id ? Object.assign({}, comment, { votes: comment.votes - 1 }) : comment })
        ];
        	
		default:
			return state;
	}
}

export default comments;