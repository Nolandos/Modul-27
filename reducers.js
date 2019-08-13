import { combineReducers } from 'redux';
import comments from './commentsReducer';

const allReducers = combineReducers({
    comments
});

export default allReducers;