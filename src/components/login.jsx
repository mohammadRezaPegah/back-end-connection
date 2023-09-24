import axios from "axios";
import React, { Component, createRef } from "react";

class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
  };
  email = createRef();
  password = createRef();
  handleSubmit = async (e) => {
    e.preventDefault();
    // Form control with ref <--comment
    // const account = {
    //   email: this.email.current.value,
    //   password: this.password.current.value,
    // };
    // if (account.email && account.password) {
    //   const response = await axios.post("https:/reqres.in/api/login", account);
    //   console.log(response);
    // }
    const account = this.state.account;
    if (account.email && account.password) {
      const response = await axios.post("https:/reqres.in/api/login", account);
      console.log(response);
    }
  };
  handleChange = (e) => {
    const input = e.currentTarget;
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    return (
      <>
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-cneter h3">Login</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group mb-2">
                <label htmlFor="email">Email address</label>
                <input
                  ref={this.email}
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.account.email}
                  onChange={this.handleChange}
                  name="email"
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input
                  ref={this.password}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={this.state.account.password}
                  onChange={this.handleChange}
                  name="password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
