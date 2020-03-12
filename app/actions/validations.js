import { ADD_VALIDATION, REMOVE_VALIDATION } from "../constants/validations";

const createValidation = (options) => {
  return {
    ...options,
  }
};
export function addValidation(options = {}) {
  return {
    payload: createValidation(options),
    type: ADD_VALIDATION
  }
};

export function removeValidation(payload) {
  return {
    payload,
    type: REMOVE_VALIDATION
  };
};