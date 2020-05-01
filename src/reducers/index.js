import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

import { postsReducer, postReducer } from './postsReducer';
import { membersReducer, memberReducer } from './membersReducer';
import { dataLoadingReducer } from './miscReducer';

export default combineReducers({
    form: formReducer,
    posts: postsReducer,
    post: postReducer,
    members: membersReducer,
    member: memberReducer,
    dataLoading: dataLoadingReducer
});