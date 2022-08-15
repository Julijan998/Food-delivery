//import * as firebase from 'firebase';
//import '@firebase/auth';
//import '@firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA0pI3TWXsY0l5TPrEKot3MAC5XGTek8Eg',
  authDomain: 'hrana-project.firebaseapp.com',
  databaseURL: 'https://hrana-project.firebaseio.com',
  projectId: 'hrana-project',
  storageBucket: 'hrana-project.appspot.com',
  messagingSenderId: '100211983642',
  appId: '1:100211983642:android:4ec508e0ca7d26a68058a3',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
