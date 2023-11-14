import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCHd5f-hc3oC55QpKdU-_QlOSOt9JsgHuM',
  authDomain: 'game-5e9e8.firebaseapp.com',
  projectId: 'game-5e9e8',
  storageBucket: 'game-5e9e8.appspot.com',
  messagingSenderId: '782200108338',
  appId: '1:782200108338:web:97bb7aa130fe432311532b',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export default {
  auth,
  provider,
};
