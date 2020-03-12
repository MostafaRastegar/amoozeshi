import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../constants/notifications";

export default function toasts(state = [], action) {
  const { payload, type } = action;

  switch (type) {
    case ADD_NOTIFICATION:
      return [payload, ...state];

    case REMOVE_NOTIFICATION:
      return state.filter(toast => toast.id !== payload);

    default:
      return state;
  }
}