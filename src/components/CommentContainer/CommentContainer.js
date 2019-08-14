import {connect} from 'react-redux';
import Comment from '../Comment/Comment';
import {likeComment, unlikeComment, deleteComment} from '../../redux/commentsReducer';

const mapDispatchToProps = dispatch => ({
  likeComment: (id) => dispatch(likeComment(id)),
  unlikeComment: (id) => dispatch(unlikeComment(id)),
  deleteComment: (id) => dispatch(deleteComment(id)) 
});

export default connect(null, mapDispatchToProps)(Comment);