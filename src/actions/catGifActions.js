import * as types from '../constants/actionTypes';


export function grabGifUrl() {
  return (dispatch, getState) => {
    const state = getState();
    if (state.catGifs.cachedUrls.length < 1) {
      fetch('http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC')
        .then(response => response.json())
        .then(json => {
          dispatch({ type: types.ADD_GIFS, payload: json.data });
        })
        .then(() => dispatch({ type: types.NEW_CURR_URL}));
    } else {
      dispatch({ type: types.NEW_CURR_URL });
    }
  };
}

export function newCurrUrl() {
  return {
    type: types.NEW_CURR_URL,
  };
}
