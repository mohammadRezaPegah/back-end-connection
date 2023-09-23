import React, { Component } from "react";
import Users from "./components/users";
import Navbar from "./components/navigation";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
