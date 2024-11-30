// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBZMvXOOTIZuenbgtnmQ0uZRGQLLye10go',
  authDomain: 'vanlife-4f9ff.firebaseapp.com',
  projectId: 'vanlife-4f9ff',
  storageBucket: 'vanlife-4f9ff.firebasestorage.app',
  messagingSenderId: '48178665975',
  appId: '1:48178665975:web:7c6953c3c42e9ccdfe36f2',
  measurementId: 'G-KG0JF4JHNN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
