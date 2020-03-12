import {
  SIGNIN_USER_INFO,
  SIGNOUT_USER,
  UPDATE_USER_INFO,
} from '../constants/actionAuthTypes';

const user = (state = {}, action) => {
  switch (action.type) {

    case SIGNIN_USER_INFO:
      return Object.assign({}, state, action.payload);
      
    case UPDATE_USER_INFO:
      return Object.assign({}, state, action.payload);

    case SIGNOUT_USER:
      localStorage.clear();
      return {};

    default:
      return state;
  }
};

export default user;
