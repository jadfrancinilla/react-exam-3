export const membersReducer =  (state = [], action) => {
    switch(action.type){
        case 'FETCH_MEMBERS':
            return action.payload;
        default:
            return state;
    };
}

export const memberReducer = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_MEMBER':
            return action.payload;
        default:
            return state;
    };
}