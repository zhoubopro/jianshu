import React from 'react';
import { HeaderWrapper, Logo,Nav } from './style';

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo/>
          <Nav>

          </Nav>
        </HeaderWrapper>
      </div>
    )
  }
}