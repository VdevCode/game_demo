import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDJljQHPQbYQLLret4P5sHhKdqXKm6az9g',
  authDomain: 'game-bc0ea.firebaseapp.com',
  projectId: 'game-bc0ea',
  storageBucket: 'game-bc0ea.appspot.com',
  messagingSenderId: '668885098812',
  appId: '1:668885098812:web:456e61ca9161143baa7e39',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default { app, auth, RecaptchaVerifier };
