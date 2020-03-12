import {
  SIGNUP_USER,
  SIGNUP_USER_RESPONSE
} from '../constants/actionAuthTypes';

const verify = (state = {}, action) => {
  switch (action.type) {
      case SIGNUP_USER:
          return Object.assign({}, state, action.payload);

      case SIGNUP_USER_RESPONSE:
          return Object.assign({}, state, action.payload);

      default:
          return state;
  }
}

export default verify;