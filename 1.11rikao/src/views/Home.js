import React, { Component } from 'react'

// import { NavLink } from "react-router-dom"

import axios from "axios"
import "../mock/index.js"

export default class Home extends Component {
    state = {
        listData:[],
        tabIndex:0
    }
    render() {
        const { listData , tabIndex } = this.state
        return (
            <div className="home">
                home页面
                <hr/>
                <div className="content">
                    <div className="leftBox">
                        {
                            listData.map(item=>{
                                return (
                                    <div key={item.index} className="tabBox">
                                        {/* <a href="#">{item.index}</a> */}
                                        <div  onClick={()=>this.handleTabIndex(item.index)}>{item.index}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="rightBox">
                        {
                            listData.map(item=>{
                                if(item.index === tabIndex){
                                    return (
                                        <div key={item.index}>
                                            {
                                                // console.log(item.children)
                                                item.children.map(val=>{
                                                    return (
                                                        <div key={val.id} className="childrenBox">
                                                            <img src={val.img} alt="bin" />
                                                            <span>{val.title}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }else{
                                    return null
                                }
                                // return (
                                //     <div key={item.index}>
                                //         <a href="#">{item.index}</a>
                                //     </div>
                                // )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        axios.get("/api/list").then(res=>{
            console.log(res.data)
            this.setState({
                listData:res.data
            })
        })
    }

    handleTabIndex(index){
        console.log(index)
        this.setState({
            tabIndex:index
        })
    }
}
