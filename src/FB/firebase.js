import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBC2poTmWBgAdl0DWEe1Myv5WIMKIgWVdI',
  authDomain: 'brazil-repair-app.firebaseapp.com',
  databaseURL: 'https://brazil-repair-app.firebaseio.com',
  projectId: 'brazil-repair-app',
  storageBucket: 'brazil-repair-app.appspot.com',
  messagingSenderId: '656694704732',
  appId: '1:656694704732:web:275e8e0d6d1f22447ec499',
  measurementId: 'G-BMYJ30YDM8',
};

const myBase = firebase.initializeApp(firebaseConfig);

export default myBase;
