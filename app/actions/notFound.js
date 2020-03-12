import {SHOW_NOT_FOUND_PAGE, HIDE_NOT_FOUND_PAGE} from '../constants/notFound';

export const show404 = () => ({
  type: SHOW_NOT_FOUND_PAGE
});
export const hide404 = () => ({
  type: HIDE_NOT_FOUND_PAGE
});