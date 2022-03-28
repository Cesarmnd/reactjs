
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAp16IxPXPopMqVlCO1R3dRH08-BE4CIf4",
  authDomain: "myfirstecommerce-750fb.firebaseapp.com",
  projectId: "myfirstecommerce-750fb",
  storageBucket: "myfirstecommerce-750fb.appspot.com",
  messagingSenderId: "72700049393",
  appId: "1:72700049393:web:db87c193211f70c646f650"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app 
} 