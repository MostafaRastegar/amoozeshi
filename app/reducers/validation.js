import { ADD_VALIDATION, REMOVE_VALIDATION } from '../constants/Validations';

export default function toasts(
  state = {
    userLogin: {},
    userSignup: {},
    userForgotPass: {},
    userVerifyPass: {},
    userResetPass: {},
    userIsVerify: {},
    userVerify: {},
    userUpdate: {},
    userChangePass: {},
    walletInc: {},
    giftInc: {},
  },
  action,
) {
  const { payload, type } = action;

  switch (type) {
    case ADD_VALIDATION:
      return { ...state, ...payload };

    case REMOVE_VALIDATION:
      return { ...state, ...payload };

    default:
      return state;
  }
}
