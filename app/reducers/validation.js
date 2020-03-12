import { ADD_VALIDATION, REMOVE_VALIDATION } from "../constants/Validations";

export default function toasts(state = {
  userLogin:{},
  userSignup:{},
  userForgotPass:{},
  userVerifyPass:{},
  userResetPass:{},
  userIsVerify:{},
  userVerify:{},
  userUpdate:{},
  userChangePass:{},
  walletInc:{},
  giftInc:{},
  userTrackTik8:{},

}, action) {
  const { payload, type } = action;

  switch (type) {
    case ADD_VALIDATION:
    return Object.assign({}, state, payload);

    case REMOVE_VALIDATION:
      return Object.assign({}, state, payload);

    default:
      return state;
  }
}