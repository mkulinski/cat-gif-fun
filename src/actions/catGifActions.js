import * as types from '../constants/actionTypes';


export function grabGifUrl() {
  return (dispatch, getState) => {
    const state = getState();
    return fetch('http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC')
      .then(response => response.json())
      .then(json => {
        console.log('json', json);
        // console.log('currUrl', state.catGifs.currUrl);
        // console.log('playedUrls', state.catGifs.playedUrls);
        // dispatch({ type: types.ADD_GIF, payload: response.data });
      })
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

// export function calculateFuelSavings(settings, fieldName, value) {
//   return {
//     type: types.CALCULATE_FUEL_SAVINGS,
//     dateModified: getFormattedDateTime(),
//     settings,
//     fieldName,
//     value
//   };
// }
