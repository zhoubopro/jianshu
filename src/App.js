import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';
import { Globaliconfont } from './statics/iconfont/iconfont';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/home';
import Login from './views/login';
import Detail from './views/detail/loadable';

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
              <Route path="/login" exact component={Login}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
