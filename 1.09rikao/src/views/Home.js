import React, { Component } from 'react'

import { connect } from "react-redux";
import Axios from 'axios';
import "../mock/index.js"

import ShowPage from '../components/ShowPage.js'

class Home extends Component {
    render() {
        const { leftData , tabIndex , handleTabIndex } = this.props
        return (
            <div className="home">
                home页面
                <hr />
                <div className="content">
                    <div className="left">
                        {
                            leftData.map(item=>{
                                return (
                                    <div onClick={() => handleTabIndex(item)} className={item===tabIndex?"active":''} key={item}>{item}</div>
                                )
                            })
                        }
                    </div>
                    <div className="right">
                        <ShowPage />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getListData()
        this.props.getLeftData()
    }
}

const mapStateToProps = (state) => {
    return {
        leftData: state.leftData,
        listData: state.listData,
        tabIndex:state.tabIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLeftData() {
            Axios.get("/api/left").then(res => {
                console.log(res.data)
                const leftData = res.data
                const action = {
                    type: "init_left_data",
                    leftData
                }
                dispatch(action)
            })
        },
        getListData() {
            Axios.get("/api/list").then(res => {
                console.log(res.data)
                const listData = res.data
                const action = {
                    type: "init_list_data",
                    listData
                }
                dispatch(action)
            })
        },
        handleTabIndex(item){
            const action = {
                type:"chang_tab_index",
                item
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)