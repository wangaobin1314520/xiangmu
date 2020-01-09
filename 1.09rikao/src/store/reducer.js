const defaultState = {
    leftData:[],
    listData:[],
    tabIndex:0
}

export const reducerName = (state=defaultState,action) =>{
    const newState = JSON.parse(JSON.stringify(state))

    if(action.type === "init_left_data"){
        newState.leftData = action.leftData
        return newState
    }

    if(action.type === "init_list_data"){
        newState.listData = action.listData
        return newState
    }

    if(action.type === "chang_tab_index"){
        newState.tabIndex = action.item
        return newState
    }

    return newState
}