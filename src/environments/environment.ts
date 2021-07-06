// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyA5MsSYnNeFjuu3f2O94vTlgD91cCt0kvc",
    authDomain: "manageur-fiches.firebaseapp.com",
    projectId: "manageur-fiches",
    storageBucket: "manageur-fiches.appspot.com",
    messagingSenderId: "1030640324479",
    appId: "1:1030640324479:web:3a5f48e855210be24c944a",
    measurementId: "G-YHDVQTK6LE"
  },
  // apiBaseUrl: "https://manageur-fiches-server.herokuapp.com"
  apiBaseUrl: "http://localhost:5000"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
