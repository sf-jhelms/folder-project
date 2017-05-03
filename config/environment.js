/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'folder-project',
    environment: environment,
    firebase: {
    apiKey: "AIzaSyBeaBt11oJ7FD3kOj_-D2spWBlLZuyS_Is",
    authDomain: "folders-76f16.firebaseapp.com",
    databaseURL: "https://folders-76f16.firebaseio.com",
    projectId: "folders-76f16",
    storageBucket: "folders-76f16.appspot.com",
    messagingSenderId: "813294207194"
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
