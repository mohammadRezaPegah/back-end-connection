import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";

const AuthProtect = ({ element: Element, protect: protect, ...restProps }) => {
  const isAuth = localStorage.getItem("back-end-connection-token");
  const location = window.location;
  if (!isAuth) {
    window.location = "/login";
    return;
  }
  return;
};

export default AuthProtect;
