export const dataLoadingReducer =  (state = false, action) => {
    switch(action.type){
        case 'DATA_LOADING':
            return action.payload;
        default:
            return state;
    };
}