import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBgCx9EojfjLEEqMAarivtnrJBBLQDAAgs",
    authDomain: "musik-auth.firebaseapp.com",
    projectId: "musik-auth",
    storageBucket: "musik-auth.appspot.com",
    messagingSenderId: "840498705463",
    appId: "1:840498705463:web:baf16ce305d33edda37bb2"
  };

 const app = initializeApp(firebaseConfig);
  
  export default {app}