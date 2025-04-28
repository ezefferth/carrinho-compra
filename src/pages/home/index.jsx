import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      Home <button onClick={() => navigate("/login")}>Login</button>{" "}
    </div>
  );
}
