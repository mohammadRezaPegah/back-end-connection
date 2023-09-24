import React, { Component } from "react";
import axios from "axios";
axios.defaults.headers.common["token"] = localStorage.getItem(
  "back-end-connection-token"
);
class Dashboard extends Component {
  state = {};
  async componentDidMount() {
    console.log("dashboard");
    const response = await axios.get("https://reqres.in/api/unknown");
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="h3 text-center">Dashboard</h1>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
