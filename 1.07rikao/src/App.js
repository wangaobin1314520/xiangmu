import React from 'react';

import { Provider } from 'react-redux'
import store from "./store/index.js"

import { BrowserRouter } from 'react-router-dom'
import RouterView from "./router/index.js"
import config from "./router/config.js"

import FooterBar from './components/FooterBar.js'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        
          <BrowserRouter>
          <div className="App">
            <div className="main">
              <RouterView routes={config} />
            </div>
            <div className="foot">
              <FooterBar />
            </div>
            </div>
          </BrowserRouter>
        
      </Provider>
    )
  }
}

export default App;
