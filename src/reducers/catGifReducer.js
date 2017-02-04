import { ADD_GIF } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';


export default function addGifs(state = initialState.catGifs, action) {

  switch (action.type) {
    case ADD_GIF:
      const currUrl = action.payload;
      const playedUrls = state.playedUrls.push(state.currUrl);
      return objectAssign({}, state, { currUrl, playedUrls });

    default:
      return state;
  }
}
