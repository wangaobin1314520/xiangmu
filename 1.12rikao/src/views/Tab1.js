import React, { Component } from 'react'

import axios from 'axios'
import "../mock/index"

export default class Tab1 extends Component {

    // constructor(props){
    //     super(props)

    // }

    state = {
        listData:[]
    }

    render() {
        return (
            <div className="tab1">
                首页
                <hr/>
                {
                    this.state.listData.map(item=>{
                        return (
                            <div key={item.id} className="content" onClick={()=>{this.handleDetail(item.id)}}>
                                <img src={item.img} alt="bin" />
                                <span>{item.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    handleDetail(id){
        // console.log(this.props)
        this.props.history.push(`/Detail/${id}`)
    }

    componentDidMount(){
        axios.get("/api/list").then(res=>{
            console.log(res.data)
            this.setState({
                listData:res.data
            })
        })
    }
}
