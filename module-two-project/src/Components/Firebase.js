import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoLB-Ii3GY4W9lgyJaTKmRtT50UYz0cTs",
  authDomain: "mod2-academyxi.firebaseapp.com",
  projectId: "mod2-academyxi",
  storageBucket: "mod2-academyxi.appspot.com",
  messagingSenderId: "378430530212",
  appId: "1:378430530212:web:71474248e1decc318a7c31",
  measurementId: "G-T6GFZX82CW"
};

firebase.initializeApp(firebaseConfig);

export default firebase