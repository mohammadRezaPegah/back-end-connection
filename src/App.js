import React, { Component } from "react";
import Users from "./components/users";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-12 text-cetner">
            <h1 className="text-center h3">Users project</h1>
          </div>
          <div className="col-12 text-cetner">
            <Users />
          </div>
        </div>
      </>
    );
  }
}

export default App;
