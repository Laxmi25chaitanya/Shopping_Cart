const counterReducer = (state = 0, action) => {
        if (action.type === 'ADD_TO_CART1'
                || action.type === 'ADD_TO_CART2'
                || action.type === 'ADD_TO_CART3'
                || action.type === 'ADD_TO_CART4'
                || action.type === 'ADD_TO_CART5') {
                return state + 1;
        }
        else
                return state;
}
export default counterReducer;
