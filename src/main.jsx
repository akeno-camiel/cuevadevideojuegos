import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsGCCZ3aLcXO_LkgdrE_LMuBHrDC5YKEE",
  authDomain: "cdvj-e1100.firebaseapp.com",
  projectId: "cdvj-e1100",
  storageBucket: "cdvj-e1100.appspot.com",
  messagingSenderId: "183320046540",
  appId: "1:183320046540:web:3486763f87553084e14b69"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
