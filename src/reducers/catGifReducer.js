import { ADD_GIFS, NEW_CURR_URL  } from '../constants/actionTypes';
import initialState from './initialState';


export default function addGifs(state = initialState.catGifs, action) {

  switch (action.type) {
    case ADD_GIFS: {
      const playedUrls = state.playedUrls;
      const cachedUrls = action.payload
                          .filter((item) => playedUrls.indexOf(item.id) === -1)
                          .reduce((acc, item) => acc.concat(item.id), []);
      return Object.assign({}, state, { cachedUrls });
    }

    case NEW_CURR_URL: {
      const cachedUrls = state.cachedUrls.slice(0, -1);
      const currUrl = state.cachedUrls[state.cachedUrls.length - 1];
      const playedUrls = state.playedUrls.concat(state.currUrl);
      console.log(cachedUrls)
      console.log(currUrl)
      console.log(playedUrls)
      return Object.assign({}, state, {
        playedUrls,
        currUrl,
        cachedUrls,
      });
    }

    default:
      return state;
  }
}
