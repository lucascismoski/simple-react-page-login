import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVDMQKItwxG280Vzb8pvP_uyJrCIy79rE",
    authDomain: "projetoead-e4dfb.firebaseapp.com",
    projectId: "projetoead-e4dfb",
    storageBucket: "projetoead-e4dfb.appspot.com",
    messagingSenderId: "734362663140",
    appId: "1:734362663140:web:dbbc86dc225ccb896e54f1"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;