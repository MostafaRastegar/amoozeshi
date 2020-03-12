import { account } from '../constants';
import deRequest from '../../utils/deRequest';

export const signUpPost = params => {
  //params: { fullname, phone_number, email, password }
  return deRequest(account.signUp_post(), 'POST', params, false);
};

export const loginPost = params => {
  //params: { identifier, password }
  return deRequest(account.login_post(), 'POST', params);
};

export const currentUserGet = () => {
  return deRequest(account.current_user_get(), 'GET', {}, false);
};
export const userUpdatePut = () => {
  return deRequest(account.user_update_put(), 'GET');
};