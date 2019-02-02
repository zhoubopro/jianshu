// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as header } from './header';
import { reducer as home } from './home';

export default combineReducers({
  header,
  home
})
