import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';
import { Globaliconfont } from './statics/iconfont/iconfont';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/home';
import Detail from './views/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GlobalStyle/>
          <Globaliconfont/>
          <BrowserRouter>
            <div>
              <Header/>
              {
                /**
                 * exact 完全相等的情况下才显示内容
                 */
              }
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
