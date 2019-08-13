import React from 'react';

const Comment = ({text, likes}) => <li>{text} <span>likes: {likes}</span></li>;

export default Comment;