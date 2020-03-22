/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
import axios from 'axios';
import { globalHeader } from '../api/constants/global';
import { addToast } from '../actions/notifications';
// import { logOutUser } from '../actions/Auth';
import { show404 } from '../actions/notFound';
import { configureStore } from '../store';
const deRequest = (url, method = 'GET', params = {}, handleError = true) =>
  new Promise((resolve, reject) => {
    const axiosConfig = {
      url,
      // timeout: 30000,
      headers: globalHeader(), // global authentication headers, required for all requests...
      method: method.toUpperCase(), // HTTP method
    };
    if (axiosConfig.method === 'GET') {
      // params is only for GET requests.
      // we should use `data`  key in other HTTP methods
      axiosConfig.params = params;
    } else {
      axiosConfig.data = params;
    }
    axios(axiosConfig)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        if (typeof error.response === 'undefined') {
          configureStore.dispatch(
            addToast({
              text: 'Please check internet connection.',
              color: 'danger',
            }),
          );
        }
        if (!handleError) {
          reject(error.response);
          return true;
        }
        const errors = [];
        const defaultErrorMessage = 'Error! please try again';
        if (error.hasOwnProperty('response') && error.response) {
          if (error.response.hasOwnProperty('status')) {
            switch (error.response.status) {
              case 422:
                if (error.response.hasOwnProperty('data')) {
                  const { data } = error.response;
                  if (data.hasOwnProperty('errors')) {
                    const validationErrors = data.errors;

                    for (const fieldName in validationErrors) {
                      errors.push(validationErrors[fieldName]);
                    }
                  }
                }
                break;
              case 403:
                errors.push('Unauthorized Access');
                break;
              case 401:
                // configureStore.dispatch(logOutUser());
                errors.push('Unauthorized Access');
                break;
              case 404:
                configureStore.dispatch(show404());
                break;
              default:
                errors.push(defaultErrorMessage);
                break;
            }
          } else {
            errors.push(defaultErrorMessage);
          }
        } else {
          errors.push(defaultErrorMessage);
        }

        for (let i = 0; i < errors.length; i++) {
          configureStore.dispatch(
            addToast({
              text: errors[i],
              color: 'danger',
            }),
          );
        }
        reject(error);
      });
  });
export default deRequest;
