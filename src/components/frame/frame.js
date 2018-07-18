import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
f;

var config = {
  apiKey: "AIzaSyDYc_Phs9I-6OQYRdcvmPPi9AJXNOYiE1I",
  authDomain: "jamsesh-68d39.firebaseapp.com",
  databaseURL: "https://jamsesh-68d39.firebaseio.com",
  projectId: "jamsesh-68d39",
  storageBucket: "jamsesh-68d39.appspot.com",
  messagingSenderId: "500614187735"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

class frame extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header id="masterhead">
          <div id="startup">
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
              id="login"
            />
            {/* <div id="loginwrap"><a href="" className="hvr-back-pulse" id="login">LOG IN</a></div> */}
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default frame;
