import React from "react";
import { Route, Routes } from "react-router";
import Home from "../../pages/home";
import Login from "../../pages/login";

export default function Routers() {
  return (
    <Routes>
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
    </Routes>
  );
}
