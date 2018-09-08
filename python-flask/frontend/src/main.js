import firebase from "firebase/app";
import "firebase/auth"
import * as firebaseui from "firebaseui";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAFIU2Y_p4-IV22m4-F7ySYUJ2NZBn6fYU",
    authDomain: "shuttle-manager.firebaseapp.com",
    databaseURL: "https://shuttle-manager.firebaseio.com",
    projectId: "shuttle-manager",
    storageBucket: "shuttle-manager.appspot.com",
    messagingSenderId: "909700724886"
};
firebase.initializeApp(config);

function configureFirebaseLoginWidget() {
    var uiConfig = {
        "signInSuccessUrl": "/",
        "signInOptions": [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url
        "tosUrl": "<your-tos-url>",
    };
  
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
}

configureFirebaseLoginWidget();