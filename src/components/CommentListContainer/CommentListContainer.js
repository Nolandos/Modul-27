import {connect} from 'react-redux';
import CommentsList from '../CommentsList/CommentsList';

//IMPORT SELECTOR
import { getComments } from '../../redux/commentsReducer';

const mapStateToProps = (state) => {
    
    return {
        comments: getComments(state)
      };
  };
export default connect(mapStateToProps)(CommentsList);