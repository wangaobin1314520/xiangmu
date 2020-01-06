const defaultState = {
    // 存储数据的仓库
    SwiperImg:[],
    // 首页数据
    listData:[],
    // tab切换数据
    tabData:[],
    // tab切换下标
    tabIndex:0
}

export const reducerName = (state=defaultState,action) =>{
    // 拷贝数据  修改数据  返回确定数据
    const newState = JSON.parse(JSON.stringify(state));

    // 给轮播图数据赋值
    if(action.type === "init_swiper_image"){
        newState.SwiperImg = action.data
        return newState
    }

    // 给首页数据赋值
    if(action.type === "init_list_data"){
        if(!newState.listData.length){
            newState.listData = action.listData
        }else{
            return newState
        }
        return newState
    }

    // 给tab切换数据赋值
    if(action.type === "init_tab_data"){
        newState.tabData = action.tabData
        return newState
    }

    // 实现tab切换
    if(action.type === "chang_tab_index"){
        newState.tabIndex = action.index
        return newState
    }

    // 点击实现加加
    if(action.type === "click_add_event"){
        let flag = newState.listData.find(val=>val.id===action.id)
        // console.log(flag)
        flag.count++
        flag.isCheck = true
        return newState
    }

    // 点击实现减减
    if(action.type === "click_remove_event"){
        let flag = newState.listData.find(val=>val.id===action.id)
        // console.log(flag)
        if(flag.count>1){
            flag.count--
        }else{
            flag.count--
            flag.isCheck=false
        }
        
        
        return newState
    }

    return newState
}