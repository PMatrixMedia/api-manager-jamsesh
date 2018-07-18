import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import members from "./";
import gapi from "gapi-client";
import axios from "axios";
import apiDiscovery from "../apiDiscovery/apiDiscovery";

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      id: []
    };
    this.google = this.google.bind(this);
  }
  componentDidMount() {
    this.google();
    const key = "AIzaSyDYc_Phs9I-6OQYRdcvmPPi9AJXNOYiE1I";
    const url =
      "https://people.googleapis.com/v1/people/me?personFields=names&fields=names&key=" +
      key;
    axios
      .get(url)
      .then(response => {
        this.setState({
          members
        });
      })
      .catch(error => console.log(error));
  }

  google() {
    function start() {
      // 2. Initialize the JavaScript client library.
      gapi.client
        .init({
          apiKey: "AIzaSyDYc_Phs9I-6OQYRdcvmPPi9AJXNOYiE1I",
          // clientId and scope are optional if auth is not required.
          clientId:
            "500614187735-ijct501n3sdqnrjkh2q0prknkkoak0ov.apps.googleusercontent.com",
          scope: "profile"
        })
        .then(function() {
          // 3. Initialize and make the API request.
          return gapi.client.request({
            path:
              "https://people.googleapis.com/v1/people/me?personFields=names&fields=names&key="
          });
        })
        .then(
          function(response) {
            console.log(response.result);
          },
          function(reason) {
            console.log("Error: " + reason.result.error.message);
          }
        );
    }
    // 1. Load the JavaScript client library.
    gapi.load("client", start);
  }

  render() {
    console.log("state", this.state);
    return (
      <React.Fragment>
        <apiDiscovery />
      </React.Fragment>
    );
  }
}

export default SignInScreen;
