import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const getTopicList = () => {
  return dispatch => {
    axios.get('/api/topicList.json').then(res => {
      const data = res.data;
      dispatch(_topicList(data.data));
    }).catch(e => console.log(e));
  }
};

const _topicList = data => ({
  type: constants.TOPIC_LIST,
  data: fromJS(data),
});