import React, { Component } from 'react'

import axios from 'axios'
import "../mock/index.js"

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            listData:[]
        }
    }

    render() {
        return (
            <div className="home">
                home页面
                <hr/>
                搜索热点
                <span className="right" onClick={()=>{this.handleChang()}}>换一换</span>
                <div className="content">
                     {
                         this.state.listData.map((item,index)=>{
                             return (
                                 <p key={index}>
                                     <b>{index}</b>
                                     <span>{item.title}</span>
                                     <span className="rightcont">
                                        {item.count}万
                                     </span>
                                 </p>
                             )
                         })
                     }
                </div>
            </div>
        )
    }

    handleChang = () =>{
        this.props.history.go(0)
    }

    componentDidMount(){
        axios.get("/api/list").then(res=>{
            console.log(res.data)
            let listData = res.data.sort((a,b)=>{
                return b.count-a.count;
            })
            console.log(listData)
            this.setState({
                listData:listData
            })
        })
    }
}
