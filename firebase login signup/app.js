import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDtv5Mpz2QI-HdZXoQ2FbLElIjzgzNVDrU",
  authDomain: "almustafa-96892.firebaseapp.com",
  projectId: "almustafa-96892",
  storageBucket: "almustafa-96892.appspot.com",
  messagingSenderId: "756553130946",
  appId: "1:756553130946:web:ade1981b591c039a5c2c5b",
  measurementId: "G-6Z6GJWQD26"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



let sbtn = document.getElementById('sbtn')
sbtn.addEventListener('click',()=>{
    let email = document.getElementById('semail').value
    let password = document.getElementById('spass').value
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user.email);
    alert('Data Inserted')
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
    alert('Data Not Inserted')
    
  });
})






