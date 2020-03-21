// reducer
import { combineReducers } from 'redux';
// import counter from './counter';
import { connectRouter } from 'connected-react-router';
import Auth from './auth';
import Loading from './loading';
import Notification from './notification';
import NotFound from './notFound';
const rootReducer = history =>
  combineReducers({
    Loading,
    Notification,
    Auth,
    NotFound,
    router: connectRouter(history),
  });
export default rootReducer;
