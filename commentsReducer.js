import {
    CREATE_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    LIKE_COMMENT,
    UNLIKE_COMMENT
} from './actions';

//REDUCER
export default function usersReducer(state = [], action={}) {
    switch (action.type) {
        case CREATE_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                likes: 0
            }, ...state];
        case DELETE_COMMENT:
            return [{ comments: state.comments.filter(comment => comment.id !== action.id) }, ...state];
        case EDIT_COMMENT:
            return [{ comments: state.comments.find(comment => comment.id === action.id).text = action.text }, ...state];
        case LIKE_COMMENT:
            return [{ comments: state.comments.find(comment => comment.id === action.id).likes++ }, ...state];
        case UNLIKE_COMMENT:
            return [{ comments: state.comments.find(comment => comment.id === action.id).likes-- }, ...state];    
        default:
            return state;
    }
};