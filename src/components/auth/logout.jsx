import React, { Component } from "react";
import AuthProtect from "../authProtect";

class Logout extends Component {
  state = {};
  componentDidMount() {
    localStorage.removeItem("back-end-connection-token");
    window.location = "/";
  }
  render() {
    return <AuthProtect />;
  }
}

export default Logout;
