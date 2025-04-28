import React from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      Login <button onClick={() => navigate(-1)}>Home</button>
    </div>
  );
}
