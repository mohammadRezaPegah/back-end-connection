import axios from "axios";
import React, { Component, createRef } from "react";
import Input from "./input";
import * as yup from "yup";

class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
    errors: [],
    sending: false,
  };
  // To validate form you can use packages and someone is yup taht installed by below command. <--comment
  // npm i yup <--comment
  // To use yup, first of all you most create a schema of condations <--comment
  // How to crate validation? follow below code <--comment
  schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: yup.string().min(6, "Password most bt grater than six charecter"),
  });
  email = createRef();
  password = createRef();
  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.account, {
        abortEarly: false,
      });
      return result;
    } catch (error) {
      this.setState({ errors: error.errors });
    }
  };
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

    const result = await this.validate();
    if (result) {
      // const response = await axios.post("https:/reqres.in/api/login", account);
      // console.log(response);

      // How to handel server error <--comment
      try {
        this.setState({ sending: true });
        const response = await axios.post(
          "https:/reqres.in/api/login",
          account
        );
        localStorage.setItem("back-en-connection-token", response.data.token);
        window.location.replace("/dashboard");
      } catch (error) {
        this.setState({ errors: ["Email or password are wrong."] });
      }
      this.setState({ sending: false });
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
        {this.state.errors.lenght !== 0 &&
          this.state.errors.map((error) => (
            <div className="alert alert-danger p-2">
              <p className="m-0">{error}</p>
            </div>
          ))}
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-cneter h3">Login</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <form onSubmit={this.handleSubmit}>
              <Input
                name="email"
                value={this.state.account.email}
                label="Email Address"
                onChange={this.handleChange}
                placeholder="enter email"
                type="email"
              />
              <Input
                name="password"
                value={this.state.account.password}
                label="Password"
                onChange={this.handleChange}
                placeholder="Password"
                type="password"
              />

              {/* <div className="form-group mb-2">
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
              </div> */}
              <button
                type="submit"
                disabled={this.state.sending}
                className="btn btn-primary"
              >
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
