import React from 'react';

import { BrowserRouter , NavLink } from "react-router-dom";

import RouterView from './router/index.js'
import config from './router/config.js'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
            <div className="main">
              <RouterView routes={config} />
            </div>
            <div className="foot">
                <NavLink to="/tab1">首页</NavLink>
                <NavLink to="/tab2">分类</NavLink>
                <NavLink to="/tab3">发现</NavLink>
                <NavLink to="/tab4">购物车</NavLink>
                <NavLink to="/tab5">我的</NavLink>
            </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
