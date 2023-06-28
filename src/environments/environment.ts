// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  firebase: {
    projectId: 'pc3-angelescobar',
    appId: '1:15097338041:web:b707931119a31c3d47a368',
    storageBucket: 'pc3-angelescobar.appspot.com',
    apiKey: 'AIzaSyBf6u3FwIMEJHKkLRw1jAvtmWKuvtou0mo',
    authDomain: 'pc3-angelescobar.firebaseapp.com',
    messagingSenderId: '15097338041',
  },
  production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
