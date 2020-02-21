import { combineReducers } from 'redux';
import blogs from './blog_reducer';

const rootReducers = combineReducers({
    blogs
});
export default rootReducers;