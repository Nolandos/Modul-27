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
            return state.filter(comment => comment.id !== action.id)          
        case EDIT_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id ) {
                    return {...comment, text: action.text}
                }
            return comment;
            });
        case LIKE_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                    return { ...comment, likes: comment.likes + 1 }
                }
            return comment;
            });
        case UNLIKE_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                    return { ...comment, likes: comment.likes - 1 }
                }
            return comment;
            });    
        default:
            return state;
    }
};