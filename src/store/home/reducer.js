import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: []
});

// reducer 必须是纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.TOPIC_LIST:
      return state.set('topicList', action.data);
    default:
      return state;
  }
}