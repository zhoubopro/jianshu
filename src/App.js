import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <Header/>
        hello
      </div>
    );
  }
}

export default App;
