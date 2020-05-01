import jsonPlaceholder from '../apis/jsonPlaceholder';
import history from '../history';
//------------------------Members------------------------
export const fetchMembers = () => {
    return async (dispatch) => {
        dispatch(dataLoading(true));
        const response = await jsonPlaceholder.get(`/users`);
        dispatch({type: 'FETCH_MEMBERS', payload: response.data});
        dispatch(dataLoading(false));
    }
};

export const fetchMember = (userId) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${userId}`);
        dispatch({type: 'FETCH_MEMBER', payload: response.data});
    }
};

//------------------------Posts------------------------
export const fetchPost = (postId) => {
    return async (dispatch) => {
        dispatch(dataLoading(true));
        const response = await jsonPlaceholder.get(`/posts/${postId}`);
        dispatch({type: 'FETCH_POST', payload: response.data});
        dispatch(dataLoading(false));
    }
}

export const createPost = (postValues) => {
    return async (dispatch) => {
        dispatch(dataLoading(true));
        const response = await jsonPlaceholder.post('/posts', postValues);
        dispatch({type: 'CREATE_POST', payload: response.data});
        dispatch(dataLoading(false));

        alert('Post successfully created.');
        history.push(`/members/${postValues.userId}`);
    }
}

export const deletePost = (postId, userId) => {
    return async (dispatch) => {
        dispatch(dataLoading(true));
        const response = await jsonPlaceholder.delete(`/posts/${postId}`)
        dispatch({type: 'DELETE_POST', payload: response.data});
        dispatch(dataLoading(false));
        
        alert('Post successfully deleted.');
        history.push(`/members/${userId}`);
    }
}


//------------------------Combined member and post------------------------
export const fetchMemberInfoAndPosts = (memberId) => {
    return async (dispatch, getState) => {
        dispatch(dataLoading(true));
        await dispatch(fetchMember(memberId));
        await dispatch(fetchPostsForMember(memberId));
        dispatch(dataLoading(false));
    }
}

export const fetchPostsForMember = (memberId) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/posts?userId=${memberId}`);
        dispatch({type: 'FETCH_POSTS', payload: response.data});
    }
};


//------------------------Misc------------------------
export const dataLoading = (isLoading) => {
    return {
        type: 'DATA_LOADING',
        payload: isLoading
    }
}