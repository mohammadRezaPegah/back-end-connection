import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";

const GuestProtect = ({ element: Element, protect: protect, ...restProps }) => {
  const isAuth = localStorage.getItem("back-end-connection-token");
  const location = window.location;
  if (isAuth) {
    window.location = "/dashboard";
    return;
  }
  return;
};

export default GuestProtect;
