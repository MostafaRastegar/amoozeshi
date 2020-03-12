/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/Routers';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, persistor, history } from './store';
import ErrorHandler from './components/errorHandler';

import 'sanitize.css/sanitize.css';
import './style/sass/custom.scss';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';

/* eslint-enable import/no-unresolved, import/extensions */

// Import i18n messages
import { translationMessages } from './i18n';
const store = configureStore;

const MOUNT_NODE = document.getElementById('app');

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <div className="container-fluid p-0">
            <ErrorHandler>
              <App />
            </ErrorHandler>
          </div>
        </ConnectedRouter>
      </PersistGate>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/Routers'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}


// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      
      caches.keys().then(function(keyList) {
        for(let i = 0 ; i < keyList.length;i++){
          if(keyList[i].match("webpack-offline")!=null){
            caches.delete(keyList[i]).then(function() {
              console.log(keyList[i]);
            });
          }
        }
      });

      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        // console.log('SW registered: ', registration);
        registration.pushManager.subscribe({userVisibleOnly: true});

      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
      navigator.serviceWorker.ready.then(function(reg) {
        Notification.requestPermission(function(status) {
            console.log('Notification permission status:', status);
        });
    });
    });
  }
}
