import React, { Component } from "react";
import axios from "axios";
import User from "./user";
import LoadingUsers from "./loading/loadingUsers";
class Users extends Component {
  state = {
    users: [],
    isLoading: true,
  };

  async componentDidMount() {
    const respons = await axios.get("https://reqres.in/api/users");
    this.setState({ users: respons.data.data, isLoading: false });
  }
  usersGenerator() {
    let element = <div></div>;
    if (this.state.isLoading) {
      element = <LoadingUsers />;
    } else {
      element = this.state.users.map((user) => {
        return (
          <User
            id={user.id}
            avatar={user.avatar}
            first_name={user.first_name}
            last_name={user.last_name}
          />
        );
      });
    }
    return element;
  }
  create = () => {};

  render() {
    return (
      <>
        <div className="row">
          <div className="col-12 py-2">
            <button className="btn btn-success" onClick={this.create}>
              New User
            </button>
          </div>
        </div>
        <div className="row">{this.usersGenerator()}</div>
      </>
    );
  }
}

export default Users;

// The best time to getting data is in componentDidMount method <--comment

// Get information from server pic a time, so you most show the user a loading to get the information, the best loading is skeleton package that installed with beloow command <--comment
// npm i react-loading-skeleton
