import {
  SIGNUP_USER,
  SIGNUP_USER_RESPONSE,
  IS_VERIFY_USER,
  VERIFY_PASS_USER_INFO,
  FORGOT_USER,
} from '../constants/actionAuthTypes';

const verify = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, ...action.payload };

    case SIGNUP_USER_RESPONSE:
      return { ...state, ...action.payload };

    case IS_VERIFY_USER:
      return { ...state, ...action.payload.user };

    case FORGOT_USER:
      return { ...state, ...action.payload.user };

    case VERIFY_PASS_USER_INFO:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default verify;
