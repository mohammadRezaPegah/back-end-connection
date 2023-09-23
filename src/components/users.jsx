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
            onUpdate={this.handelUpdate}
            onDelete={this.handelDelete}
          />
        );
      });
    }
    return element;
  }
  create = async () => {
    const newUser = {
      first_name: "milad",
      last_name: "Pegah",
      email: "miladpersonal1999@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/45096088?v=4",
      job: "Programmer",
    };
    const response = await axios.post("https://reqres.in/api/users", newUser);
    // Add new user to state <--comment
    this.setState({ users: [...this.state.users, newUser] });
  };

  handelUpdate = async (user) => {
    let data = this.state.users.filter((u) => u.id == user)[0];
    data.first_name = "updated";
    const respons = await axios.put(
      "https://reqres.in/api/users/${data.id}",
      data
    );
    const updaedUsers = [...this.state.users];
    const index = updaedUsers.indexOf(data);
    updaedUsers[index] = { ...data };
    this.setState({ users: updaedUsers });
  };
  handelDelete = async (user) => {
    let data = this.state.users.filter((u) => u.id == user)[0];
    const respons = await axios.delete(
      "https://reqres.in/api/users/${data.id}"
    );
    const newUsers = this.state.users.filter((u) => u.id !== user);
    this.setState({ users: newUsers });
    console.log(respons);
  };

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
