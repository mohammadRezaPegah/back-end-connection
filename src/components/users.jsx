import React, { Component } from "react";
import axios from "axios";
import User from "./user";
class Users extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const respons = await axios.get("https://reqres.in/api/users");
    this.setState({ users: respons.data.data });
  }
  usersGenerator() {
    let element = this.state.users.map((user) => {
      return (
        <User
          id={user.id}
          avatar={user.avatar}
          first_name={user.first_name}
          last_name={user.last_name}
        />
      );
    });
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
