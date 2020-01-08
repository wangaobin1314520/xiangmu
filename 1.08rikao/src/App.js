import React from 'react';

import { BrowserRouter } from 'react-router-dom'
import RouterView from "./router/index.js"
import config from "./router/config.js";

class App extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state = {

  //   }
  // }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <RouterView routes={config} />
        </BrowserRouter>
      </div>
    )
  }

  

}

export default App;
