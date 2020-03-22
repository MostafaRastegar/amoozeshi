import { account } from '../constants';
import deRequest from '../../utils/deRequest';

export const signUpPost = params =>
  // params: { fullname, phone_number, email, password }
  deRequest(account.signUp_post(), 'POST', params, false);

export const loginPost = params =>
  // params: { identifier, password }
  deRequest(account.login_post(), 'POST', params);

export const currentUserGet = () =>
  deRequest(account.current_user_get(), 'GET', {}, false);
export const userUpdatePut = () => deRequest(account.user_update_put(), 'GET');
