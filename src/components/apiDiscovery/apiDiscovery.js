import React from "react";
import gapi from "gapi-client";

class apiDiscovery extends React.Component {
  componentDidMount() {
    // this is taken directly from Google documentation:
    // https://developers.google.com/api-client-library/javascript/start/start-js
    function start() {
      // 2. Initialize the JavaScript client library.
      gapi.client
        .init({
          apiKey: "AIzaSyDYc_Phs9I-AIzaSyDpKkOCdcWmOc-hy28_5WSK-FSxise0fXQ",
          // clientId and scope are optional if auth is not required.
          clientId:
            "500614187735-ijct501n3sdqnrjkh2q0prknkkoak0ov.apps.googleusercontent.com",
          scope: "profile"
        })
        .then(function() {
          // 3. Initialize and make the API request.
          return gapi.client.people.people.get({
            resourceName: "people/me",
            "requestMask.includeField": ""
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
}

export default apiDiscovery;
