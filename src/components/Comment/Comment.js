import React from 'react';

const Comment = ({text, likes, id, likeComment, unlikeComment, deleteComment}) => 
    <li>
        {text} <span>likes: {likes}</span>
        <button onClick={() => likeComment(id)}>Like</button>
        <button onClick={() => unlikeComment(id)}>Unlike</button>
        <button onClick={() => deleteComment(id)}>Remove</button>
    </li>;

export default Comment;