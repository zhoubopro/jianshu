import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const getHomeInfo = () => {
  return dispatch => {
    axios.get('/api/home.json').then(res => {
      const data = res.data;
      dispatch(_changeHomeData(data.data));
    }).catch(e => console.log(e));
  }
};

const _changeHomeData = data => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList)
});

// 阅读更多
export const getMoreArticleList = () => {
  return dispatch => {
    axios.get('/api/homeList.json').then(res => {
      const data = res.data;
      console.log(data);
      dispatch(_getMoreArticleList(data));
    }).catch(e => console.log(e));
  }
};

const _getMoreArticleList = data => ({
  type: constants.MORE_ARTICLE_DATA,
  data: fromJS(data.data)
});

export const toggleTopShow = show => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
});
// export const getTopicList = () => {
//   return dispatch => {
//     axios.get('/api/topicList.json').then(res => {
//       const data = res.data;
//       dispatch(_topicList(data.data));
//     }).catch(e => console.log(e));
//   }
// };
//
// const _topicList = data => ({
//   type: constants.TOPIC_LIST,
//   data: fromJS(data),
// });
//
// export const getArticleList = () => {
//   return dispatch => {
//     axios.get('/api/articleList.json').then(res => {
//       const data = res.data;
//       dispatch(_articleList(data.data));
//     }).catch(e => console.log(e));
//   }
// };
//
// const _articleList = data => ({
//   type: constants.ARTICLE_LIST,
//   data: fromJS(data),
// });
//
// export const getRecommendList = () => {
//   return dispatch => {
//     axios.get('/api/recommend.json').then(res => {
//       const data = res.data;
//       dispatch(_recommendList(data.data));
//     }).catch(e => console.log(e));
//   }
// };
//
// const _recommendList = data => ({
//   type: constants.RECOMMEND_LIST,
//   data: fromJS(data),
// });