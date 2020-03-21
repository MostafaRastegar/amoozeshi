import {
  SHOW_NOT_FOUND_PAGE,
  HIDE_NOT_FOUND_PAGE,
} from '../constants/notFound';

const INIT_STATE = {
  show: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SHOW_NOT_FOUND_PAGE:
      return { ...state, show: true };
    case HIDE_NOT_FOUND_PAGE:
      return { ...state, show: false };
    default:
      return state;
  }
};
