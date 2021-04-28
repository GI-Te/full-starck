const userReducer = (state,action) => {
    switch(action.type) {
        case "LOGIN_USER":
            return{
                ...state,
                user:action.payload,
                isPending:false
            }
        case "REGISTER":
            return{
                ...state,
                user:action.payload,
                loading:false
            }
        default:
            return state
    }
}

export default userReducer;
