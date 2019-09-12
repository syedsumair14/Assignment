let initState = {
    form: {}
}

export const dataReducer = (state= initState, action) => {
    switch(action.type){
        case ('GET_DATA'):
            return {
                ...state,
                form: action.payload
            }
        default:
            return state
    }
}