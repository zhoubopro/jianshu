import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from '../../store/header';
import { actionCreators as loginActionCreators } from '../../store/login';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';

class Header extends Component {

  render() {
    const {
      focused, mouseIn, list, page, totalPage, login, logout,
      handleInputFocus, handleInputBlur, handleMouseEnter, handleMouseLeave, handleChangePage
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length > 0) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
      }
    }
    const getListArea = () => {
      if (focused || mouseIn) {
        return (
          <SearchInfo
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch
                onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
              >
                {/*<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>*/}
                <i ref={(icon) => {
                  this.spinIcon = icon
                }} className="iconfont spin">&#xe865;</i>
                换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              {pageList}
            </SearchInfoList>
          </SearchInfo>
        )
      } else {
        return null;
      }
    };

    return (
      <Fragment>
        <HeaderWrapper>
          <Link to="/">
            <Logo/>
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">
              <span className="iconfont">&#xe636;</span>
            </NavItem>
            {
              login ?
                <NavItem onClick={logout} className='right'>退出</NavItem> :
                <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
            }
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe624;</span>
              {getListArea()}
            </SearchWrapper>

          </Nav>
          <Addition>
            <Button className="writting">
              <span className="iconfont">&#xe6a4;</span> 写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // focused: state.header.get('focused')
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login']),
    logout: state.getIn(['login', 'logout']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: (list) => {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur: () => {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter: () => {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave: () => {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage: (page, totalPage, spin) => {

      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      }
      else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);