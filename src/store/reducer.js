// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as header } from './header';
import { reducer as home } from './home';
import { reducer as detail } from './detail';
import { reducer as login } from './login';

export default combineReducers({
  header,
  home,
  detail,
  login
})
