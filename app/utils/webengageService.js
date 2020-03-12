export function checkWebengageExists() {
  return typeof webengage !== 'undefined';
}

export function track(message, data) {
  try {
    checkWebengageExists() && webengage.track(message, data);
  }
  catch (ex) {
  }
}

export function userLoggedIn(id)   {
  try {
    checkWebengageExists() && webengage.user.login(id);
  } catch (ex) {
    console.error(ex);
  }
}

export function userLoggedOut()  {
  try {
    checkWebengageExists() && webengage.user.logout();
  } catch (ex) {
  }
};
