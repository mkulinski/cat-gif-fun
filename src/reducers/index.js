import { combineReducers } from 'redux';
import catGifReducer from './catGifReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  catGifs: catGifReducer,
  routing: routerReducer
});

export default rootReducer;
