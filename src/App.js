import React, { Component } from "react";
import Users from "./components/users";
import Navbar from "./components/navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import UserShow from "./components/userShow";
import NotFound from "./components/notFound";
import Dashboard from "./components/auth/dashboard";
import axios from "axios";
import Logout from "./components/auth/logout";

class App extends Component {
  state = {
    user: null,
  };
  async componentDidMount() {
    const token = localStorage.getItem("back-end-connection-token");
    if (!token) {
      this.setState({ user: null });
      return;
    }
    // Confirm user token <--comment
    // const response = await axios.post("https://backend-token-validation-url", {
    //   token,
    // });

    const response = {
      data: {
        user: {
          name: "milad pegah",
          email: "miladpersonal1999@gmail.com",
        },
      },
    };
    if (!response.data.user) {
      this.setState({ user: null });
      return;
    }
    this.setState({ user: response.data.user });
  }
  render() {
    return (
      <>
        <Navbar user={this.state.user} />
        <div className="container">
          <Routes>
            <Route path="/users/:id" element={<UserShow />} />
            <Route path="/users" element={<Users />} />
            {/* required paramater */}
            <Route path="/login/timestamp?" element={<Login />} />
            {/* optional paramater */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
