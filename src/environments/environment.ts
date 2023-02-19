// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    apiKey: "AIzaSyAYCfR3z9i_lIfJXJ6NQrAa_7sodyrV3Jg",
    authDomain: "atomic-store-card.firebaseapp.com",
    projectId: "atomic-store-card",
    storageBucket: "atomic-store-card.appspot.com",
    messagingSenderId: "323968160800",
    appId: "1:323968160800:web:16f631d78026278ab59845",
    locationId: 'us-central',
  },
  production: false,
  baseUrlApi: 'https://rickandmortyapi.com/api/character',
  // baseUrl:"http://localhost:8080",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
