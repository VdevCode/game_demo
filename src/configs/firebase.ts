import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBXOXFT8JwxJEJgICa38Hy_pvm5TLxYcnQ',
  authDomain: 'gamer-73c8d.firebaseapp.com',
  projectId: 'gamer-73c8d',
  storageBucket: 'gamer-73c8d.appspot.com',
  messagingSenderId: '1067050796180',
  appId: '1:1067050796180:web:4a4be7b4819188bac56081',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default { app, auth, RecaptchaVerifier };
