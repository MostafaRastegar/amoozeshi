import {
  // USER_AUTH_CHECK,
  // SIGNIN_USER,
  SIGNIN_USER_INFO,
  MAKE_USER_VERIFY,
  VERIFY_USER_INFO,
  SIGNOUT_USER,
  UPDATE_USER_INFO,
  USER_BALANCE,
  USER_GIFT_BALANCE,
  EDIT_ORGANIZATION,
  EDIT_MOBILE,
} from '../constants/actionAuthTypes';
import { OTP_VERIFY } from '../constants/actionOtpTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case OTP_VERIFY:
      return { ...state, ...action.payload.session.user };

    case SIGNIN_USER_INFO:
      return { ...state, ...action.payload };

    case VERIFY_USER_INFO:
      return { ...state, ...action.payload };
    case MAKE_USER_VERIFY:
      return { ...state, mobileIsVerified: true };
    case EDIT_ORGANIZATION:
      return { ...state, organization: action.payload };
    case UPDATE_USER_INFO:
      return { ...state, ...action.payload };

    case USER_BALANCE:
      return { ...state, ...action.payload };

    case USER_GIFT_BALANCE:
      return { ...state, ...action.payload };

    case EDIT_MOBILE:
      return { ...state, mobileNumber: action.payload };

    case SIGNOUT_USER:
      // localStorage.removeItem("token");
      return {};

    default:
      return state;
  }
};

export default user;
