import React, { Component } from 'react'

import { connect } from "react-redux";

import Swiper from "swiper"
import "swiper/css/swiper.css"

import axios from "axios"
import "../mock/index"

class SwiperPage extends Component {
    render() {
        const { SwiperImg } = this.props;
        return (
            <div className="swiperpage">
                轮播图页面
                <hr/>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            SwiperImg.map(item=>{
                                return (
                                    <div key={item.id} className="swiper-slide">
                                        <img src={item.img} alt="bin" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getSwiperImage()
    }
}

const mapStateToProps = (state) =>{
    return {
        // 轮播图数据
        SwiperImg:state.SwiperImg
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        // 获取轮播图数据
        getSwiperImage(){
            axios.get("/api/swiperImg").then(res=>{
                console.log(res.data)
                const data = res.data
                const action = {
                    type:"init_swiper_image",
                    data
                }
                dispatch(action)
                new Swiper(".swiper-container",{
                    loop:true,
                    autoplay:true
                })
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwiperPage)