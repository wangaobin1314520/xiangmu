const defaultState = {

}

export const reducerName = (state=defaultState,action) =>{
    const newState = JSON.parse(JSON.stringify(state))

    return newState
}