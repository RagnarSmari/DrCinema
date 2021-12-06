import * as constants from '../constants';

// eslint-disable-next-line default-param-last
export default function (state = [], action) {
  switch (action.type) {
    case constants.GET_ALL_MOVIES:
      return action.payload;
    default:
      return state;
  }
}
