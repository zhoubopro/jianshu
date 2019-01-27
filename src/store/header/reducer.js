import * as constants from './constants';

const defaultState = {
  focused: false,
};

// reducer 必须是纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return { focused: true };
    case constants.SEARCH_BLUR:
      return { focused: false };
    default:
      return state;
  }
}