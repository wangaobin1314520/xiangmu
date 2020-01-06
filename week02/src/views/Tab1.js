import React, { Component } from 'react'

import { connect } from 'react-redux'

import axios from "axios"
import "../mock/index.js"

class Tab1 extends Component {
    render() {
        const { listData , tabIndex , tabData , handleTabIndex , handleAddEvent , handleRemoveEvent } = this.props
        return (
            <div className="tab1">
                <div className="toptab">
                    {
                        tabData.map((item,index)=>{
                            return (
                                <span 
                                className={index===tabIndex?"color":""} 
                                key={index}
                                onClick={()=>handleTabIndex(index)}
                                >
                                    {item}
                                </span>
                            )
                        })
                    }
                </div>

                <hr/>
                {
                    listData.map((item,index)=>{
                        if(item.index===tabIndex){
                            return (
                                <div key={index} className="tab1Son">
                                    <div className="left"><img src={item.img} alt="bin" /></div>
                                    <div className="right">
                                        <span>{item.title}</span><br/>
                                        ￥{item.price}<br/>
                                        {
                                            item.count && <React.Fragment>
                                                <b onClick={()=>handleRemoveEvent(item.id)}>-</b>
                                                <span>{item.count}</span>
                                            </React.Fragment>
                                        }
                                        <b onClick={()=>handleAddEvent(item.id)}>+</b>
                                    </div>
                                </div>
                            )
                        }else{
                            return null;
                        }
                    })
                }
            </div>
        )
    }

    componentDidMount(){
        this.props.getListData()
        this.props.getTabData()
    }
}

const mapStateToProps = (state) =>{
    return {
        listData:state.listData,
        tabData:state.tabData,
        tabIndex:state.tabIndex
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        // 获取首页数据
        getListData(){
            axios.get("/api/list").then(res=>{
                console.log(res.data)
                const listData = res.data
                const action = {
                    type:"init_list_data",
                    listData
                }
                dispatch(action)
            })
        },
        // 获取tab切换数据
        getTabData(){
            axios.get("/api/tabData").then(res=>{
                console.log(res.data)
                const tabData = res.data
                const action = {
                    type:"init_tab_data",
                    tabData
                }
                dispatch(action)
            })
        },
        // 实现tab切换
        handleTabIndex(index){
            const action = {
                type:"chang_tab_index",
                index
            }
            dispatch(action)
        },
        // 点击加加按钮
        handleAddEvent(id){
            const action = {
                type:"click_add_event",
                id
            }
            dispatch(action)
        },
        // 点击减减按钮
        handleRemoveEvent(id){
            const action = {
                type:"click_remove_event",
                id
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab1)