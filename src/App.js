import React, { Component } from "react";
import Users from "./components/users";
import Navbar from "./components/navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import UserShow from "./components/userShow";
import NotFound from "./components/notFound";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/users/:id" element={<UserShow />} />
            <Route path="/users" element={<Users />} />
            {/* required paramater */}
            <Route path="/login/timestamp?" element={<Login />} />
            {/* optional paramater */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
