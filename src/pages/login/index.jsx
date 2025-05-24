<<<<<<< HEAD
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../components/context/auth";
import Button from "./button";

export default function Login() {
  const navigate = useNavigate();

  const { teste, setAuth } = useContext(AuthContext);

  function login() {
    setAuth(true);
    navigate("/produtos");
  }

  return (
    <div>
      {/* Login <button onClick={teste}>Entrar</button> */}
      Login <button onClick={() => login()}>Entrar</button>
      {/* <Button>Entrar 2.0</Button> */}
=======
import React from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      Login <button onClick={() => navigate(-1)}>Home</button>
>>>>>>> e55a8a880a6910d2412986dfb3946a826b94e131
    </div>
  );
}
