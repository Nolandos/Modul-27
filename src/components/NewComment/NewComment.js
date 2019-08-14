//REQUIRED IMPORTS
import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

//IMPORT REDUX ELEMENTS
import { createComment } from '../../redux/commentsReducer';

class NewComment extends React.Component { 

    state = {
        commentText: ''
    }
    
    handleChange = e => {
        let commentText = e.target.value;
        this.setState({commentText: commentText});
    }

    handleSubmit = e => {  
        e.preventDefault();
        const { commentText } = this.state;
        const { createComment } = this.props;
        createComment(commentText, uuid.v4());
    }

    render() {
        return (
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <label htmlFor="commentText">Treść Komentarza</label>
                <input
                    type="text"
                    id="commentText"
                    placeholder="Comment..."
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}

const mapDispatchToProps = { createComment };

export default NewComment = connect(null, mapDispatchToProps)(NewComment);