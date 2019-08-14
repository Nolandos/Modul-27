//SELECTORS
export const getComments = ({ comments }) => comments;

//Action Types
const CREATE_COMMENT = 'CREATE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const LIKE_COMMENT = 'LIKE_COMMENT';
const UNLIKE_COMMENT = 'UNLIKE_COMMENT';

//ACTIONS CREATORS
export const createComment = (text, id) => ({type: CREATE_COMMENT, text, id});
export const editComment = (text, id) => ({type: EDIT_COMMENT, text, id});  
export const deleteComment = (id) => ({type: DELETE_COMMENT, id});
export const likeComment = (id) => ({type: LIKE_COMMENT, id});
export const unlikeComment = (id) => ({type: UNLIKE_COMMENT, id});

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
