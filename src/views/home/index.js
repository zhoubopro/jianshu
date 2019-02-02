import React from 'react';
import Topic from './component/Topic';
import ArticleList from './component/ArticleList';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';
import { actionCreators } from "../../store/home";

class Home extends React.Component {

  componentDidMount() {
    this.props.getHomeInfo();
    this.bindEvents();
  }

  handleScrollTop = e => {
    window.scrollTo(0, 0);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }

  render() {
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          {/*<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />*/}
          <img className='banner-img' alt=''
               src="https://upload.jianshu.io/admin_banners/web_images/4607/2836fb00d1d98798ffe218fc709ec80d30b18c0e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic/>
          <ArticleList/>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          showScroll ? <BackTop onClick={this.handleScrollTop}>顶部⇪</BackTop> : null
        }
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.getIn(['home', 'recommendList']),
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatchToProps = dispatch => {
  return {
    getHomeInfo: () => {
      dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.toggleTopShow(true));
      }
      else {
        dispatch(actionCreators.toggleTopShow(false));
      }
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);