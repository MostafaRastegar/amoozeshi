import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../constants/notifications";

let id = 0;
const defaultOptions = {
  color: '#6796e6',
};

const createToast = options => {
  return {
    ...defaultOptions,
    ...options,
    id: id++,
  }
};


export function addToast(options = {}) {
  return {
    payload: createToast(options),
    type: ADD_NOTIFICATION
  }
};

export function removeToast(id) {
  return {
    payload: id,
    type: REMOVE_NOTIFICATION
  };
};