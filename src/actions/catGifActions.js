import * as types from '../constants/actionTypes';


export function grabGifUrl() {
  return (dispatch, getState) => {
    const state = getState();
    // console.log(state);
    if (state.catGifs.cachedUrls.length < 1) {
      fetch('http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC')
        .then(response => response.json())
        .then(json => {
          // console.log('currUrl', state.catGifs.currUrl);
          // console.log('playedUrls', state.catGifs.playedUrls);
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

// export function grabGifUrl() {
//   return function (dispatch) {
//     return dispatch({
//       type: types.ADD_GIF,
//       payload: url,
//     });
//   };
// }

// export function checkIfInPlayedUrls(oldUrl) {
//   return {
//     type: types.
//   }
// }
