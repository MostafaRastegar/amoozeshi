import { DISABLE_LOADING, ENABLE_LOADING } from '../constants/actionLoading';

const loading = (state = {}, action) => {
  switch (action.type) {
    case DISABLE_LOADING:
      return { ...state, ...action.payload };
    case ENABLE_LOADING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default loading;
