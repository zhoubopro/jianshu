import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';
import { Globaliconfont } from './statics/iconfont/iconfont';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <Globaliconfont/>
        <Header/>
        hello
      </div>
    );
  }
}

export default App;
