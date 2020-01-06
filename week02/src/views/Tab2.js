import React, { Component } from 'react'

import { connect } from 'react-redux'

class Tab2 extends Component {
    render() {
        const { listData, handleAddEvent , handleRemoveEvent } = this.props;
        return (
            <div className="tab2">
                tab2页面
                <hr />
                {
                    listData.map((item, index) => {
                        if(item.isCheck){
                            return (
                                <div key={index} className="tab1Son">
                                    <div className="left"><img src={item.img} alt="bin" /></div>
                                    <div className="right">
                                        <span>{item.title}</span><br />
                                        ￥{item.price}<br />
                                        {
                                            item.count && <React.Fragment>
                                                <b onClick={()=>handleRemoveEvent(item.id)}>-</b>
                                                <span>{item.count}</span>
                                            </React.Fragment>
                                        }
                                        <b onClick={() => handleAddEvent(item.id)}>+</b>
                                    </div>
                                </div>
                            )
                        }else{
                            return null;
                        }
                    })
                }
                <div className="totalPrice">
                    总价:{this.computedTotalPrice()}
                </div>
            </div>
        )
    }

    computedTotalPrice=()=>{
        return this.props.listData.reduce((n,m)=>{
            return n + m.count * m.price
        },0)
    }

}



const mapStateToProps = (state) => {
    return {
        listData: state.listData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // 点击加加按钮
        handleAddEvent(id) {
            const action = {
                type: "click_add_event",
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

export default connect(mapStateToProps, mapDispatchToProps)(Tab2)