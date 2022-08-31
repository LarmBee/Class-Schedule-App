// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAdvap2spz1zo1cfrNrJmlWcde_iYrD1fc",
	authDomain: "class-schedule-360207.firebaseapp.com",
	projectId: "class-schedule-360207",
	storageBucket: "class-schedule-360207.appspot.com",
	messagingSenderId: "1057607411088",
	appId: "1:1057607411088:web:a25d0887e680cecc1eff15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
