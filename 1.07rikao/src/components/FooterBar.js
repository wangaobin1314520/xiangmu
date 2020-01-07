import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

export default class FooterBar extends Component {
    render() {
        return (
            <div className="footPage">
                <NavLink to="/tab1">新车</NavLink>
                <NavLink to="/tab2">二手车</NavLink>
                <NavLink to="/tab3">发现</NavLink>
                <NavLink to="/tab4">社区</NavLink>
                <NavLink to="/tab5">我的</NavLink>
            </div>
        )
    }
}
