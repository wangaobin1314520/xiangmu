import React, { Component } from 'react'

import axios from 'axios'
import "../mock/index"

export default class Detail extends Component {
    state = {
        detailData:[]
    }

    render() {
        return (
            <div className="detail">
                {
                    this.state.detailData.length ? <div>
                    { 
                        <div>
                            <img src={this.state.detailData[0].img} alt="bin" />
                            <span>{this.state.detailData[0].title}</span>
                        </div>
                    }
                </div> : ""
                }
            </div>
        )
    }

    componentDidMount(){
        // console.log(this.props.match.params)
        const { id } = this.props.match.params;
        console.log(id)
        axios.get(`/api/list?id=${id}`).then(res=>{
            console.log(res.data)
            this.setState({
                detailData:res.data
            })
        })
    }

}
