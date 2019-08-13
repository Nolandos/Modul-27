//Action Types
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const LIKE_COMMENT = 'LIKE_COMMENT';
export const UNLIKE_COMMENT = 'UNLIKE_COMMENT';

//ACTIONS CREATORS
const createComment = (text, id) => ({type: CREATE_COMMENT, text, id});
const editComment = (text, id) => ({type: EDIT_COMMENT, text, id});  
const deleteComment = (id) => ({type: DELETE_COMMENT, id});
const likeComment = (id) => ({type: LIKE_COMMENT, id});
const unlikeComment = (id) => ({type: UNLIKE_COMMENT, id});


//Examples
dispatch(createComment('nowy komentarz!', uuid.v4()));
dispatch(editComment('nowa treść', 'asdhasdkjasda21312dsa'));
dispatch(deleteComment('asdhasdkjasda21312dsa'));
dispatch(likeComment('asdhasdkjasda21312dsa'));
dispatch(unlikeComment('asdhasdkjasda21312dsa'));