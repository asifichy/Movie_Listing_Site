// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvx28quSyNIkdIyyuPsu3Qxc9EFtqAau8",
  authDomain: "netflix-clone-5a102.firebaseapp.com",
  projectId: "netflix-clone-5a102",
  storageBucket: "netflix-clone-5a102.appspot.com",
  messagingSenderId: "725664619686",
  appId: "1:725664619686:web:60ebd42ecea5f13dbe6867"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//configure firestoredb
const db = getFirestore(app); 

//user signup func
const signup = async(name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;

        //store the details at db
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

//user login func
const login = async()=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

//user logout func
const logout = async()=> {
    signOut(auth);
}

export {auth, db, login, signup, logout};




