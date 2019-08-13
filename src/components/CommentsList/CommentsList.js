import React from 'react';
import Comment from '../Comment/Comment';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;
//const CommentsList = ({comments}) => <ul></ul>;
export default CommentsList;