const customersReducer = (state,action) => {
    switch(action.type) {
        case "GET_ALL_CUSTOMERS":
            return{
                ...state,
                customers:action.payload,
                loading:false
            }
        default:
            return state
    }
}

export default customersReducer;
