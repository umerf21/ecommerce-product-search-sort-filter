import { combineReducers } from 'redux';
import Home from './Home';
import product from './product';
const appReducer = combineReducers({
  product,
  Home,
});

export default appReducer;
