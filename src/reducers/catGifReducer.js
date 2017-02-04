import { ADD_GIF } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';


export default function addGifs(state = initialState.catGifs, action) {

  switch (action.type) {
    case ADD_GIF:
      const imgUrls = state.imgUrls.push(action.payload);
      return objectAssign({}, state, { imgUrls });

    default:
      return state;
  }
}
