export const API_URL_ROOT = process.env.APP_URL;
const { APP_BASE_CANONICAL_URL } = process.env;

export const websiteUrl = (relativePath = '') => {
  let newRelativePath = relativePath;
  if (relativePath === '/') {
    newRelativePath = '';
  }
  return APP_BASE_CANONICAL_URL + newRelativePath;
};

const globalHeaderObj = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
};
export const globalHeader = () => {
  if (typeof localStorage.getItem('token') !== 'undefined') {
    globalHeaderObj.Authorization = `Token ${localStorage.getItem('token')}`;
    return globalHeaderObj;
  }
  return globalHeaderObj;
};
