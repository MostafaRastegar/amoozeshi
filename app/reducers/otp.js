import {
  OTP_REQUEST,
  OTP_FULL_DATA
} from '../constants/actionOtpTypes';

const otp = (state = {}, action) => {
  switch (action.type) {
    case OTP_REQUEST:
      return Object.assign({}, state, action.payload);
    case OTP_FULL_DATA:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default otp;
