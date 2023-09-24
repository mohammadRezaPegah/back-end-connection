import React, { Component } from "react";
import GuestProtect from "./guestProtect";

class Register extends Component {
  state = {};
  render() {
    return (
      <>
        <GuestProtect />
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-cneter h3">Register</h1>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
