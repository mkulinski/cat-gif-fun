import * as types from '../constants/actionTypes';

export function grabGifUrl(url) {
  return function (dispatch) {
    return dispatch({
      type: types.ADD_GIF,
      payload: url,
    });
  };
}

// export function handleClick(oldUrl) {
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
