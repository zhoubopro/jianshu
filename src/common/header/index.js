import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from '../../store/header';
import {
  HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button
} from './style';

const Header = ({ focused, handleInputFocus, handleInputBlur }) => {
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <NavItem className="right">登陆</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe624;</span>
        </SearchWrapper>

      </Nav>
      <Addition>
        <Button className="writting">
          <span className="iconfont">&#xe6a4;</span> 写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: () => {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur: () => {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);