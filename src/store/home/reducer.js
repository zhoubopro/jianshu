import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  showScroll: false
});

// reducer 必须是纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        'topicList': fromJS(action.topicList),
        'articleList': fromJS(action.articleList),
        'recommendList': fromJS(action.recommendList),
      });
    case constants.MORE_ARTICLE_DATA:
      return state.set('articleList', state.get('articleList').concat(action.data));
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show);
    case constants.TOPIC_LIST:
      return state.set('topicList', action.data);
    case constants.ARTICLE_LIST:
      return state.set('articleList', action.data);
    case constants.RECOMMEND_LIST:
      return state.set('recommendList', action.data);
    default:
      return state;
  }
}