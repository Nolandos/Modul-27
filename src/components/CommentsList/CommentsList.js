import React from 'react';
import Comment from '../CommentContainer/CommentContainer';
import NewComment from '../NewComment/NewComment';

const CommentsList = ({comments}) => 
<div>
{console.log(comments)}
    <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
    <NewComment />
</div>
export default CommentsList;