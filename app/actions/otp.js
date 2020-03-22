import {
  SIGNIN_USER_OTP,
  OTP_REQUEST,
  OTP_VERIFY,
  OTP_SIGNUP,
  SIGNIN_USER_OTP_VERIFY,
  OTP_FULL_DATA,
} from '../constants/actionOtpTypes';

export const getUserOtp = user => ({
  type: SIGNIN_USER_OTP,
  payload: user,
});

export const otpRequestAction = user => ({
  type: OTP_REQUEST,
  payload: user,
});

export const getUserOtpVerify = user => ({
  type: SIGNIN_USER_OTP_VERIFY,
  payload: user,
});

export const otpVerifyAction = verification => ({
  type: OTP_VERIFY,
  payload: verification,
});

export const otpSignupAction = user => ({
  type: OTP_SIGNUP,
  payload: user,
});

export const otpFullData = user => ({
  type: OTP_FULL_DATA,
  payload: user,
});
