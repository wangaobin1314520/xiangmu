import React from 'react';

import { Provider } from "react-redux"
import store from "./store/index.js";

import { BrowserRouter , NavLink } from 'react-router-dom'
import RouterView from "./router/index.js"
import config from "./router/config.js"

// 轮播图插件
import SwiperPage from "./components/SwiperPage.js"

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <div className="main">
              {/* 轮播图插件 */}
              <SwiperPage />
              <RouterView routes={config} />
            </div>
            <div className="foot">
              <NavLink to="/tab1">首页</NavLink>
              <NavLink to="/tab2">购物车</NavLink>
              <NavLink to="/tab3">我的</NavLink>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;
