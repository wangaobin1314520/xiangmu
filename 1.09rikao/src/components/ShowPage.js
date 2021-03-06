import React, { Component } from 'react'

import { connect } from "react-redux";

class ShowPage extends Component {
    render() {
        const { tabIndex , listData } = this.props
        return (
            <div className="show">
                {
                    listData.map(item=>{
                        if(item.type === tabIndex){
                            return (
                                item.children.map((val,index)=>{
                                    return (
                                        <div className="showson" key={index}>
                                            {item.type}
                                            {val.title}
                                        </div>
                                    )
                                })
                            )
                        }else{
                            return null
                        }
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        listData:state.listData,
        tabIndex:state.tabIndex
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage)