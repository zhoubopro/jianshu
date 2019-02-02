import React from 'react';

import Topic from './component/Topic';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          {/*<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />*/}
          <img className='banner-img' alt='' src="https://upload.jianshu.io/admin_banners/web_images/4607/2836fb00d1d98798ffe218fc709ec80d30b18c0e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
        </HomeLeft>
        <HomeRight>
          123
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home;