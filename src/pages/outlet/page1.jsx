import React from "react";
import { Outlet, useNavigate } from "react-router";

export default function Page1() {
  const navigate = useNavigate();

  return (
    <div>
      <div>page1</div>
      <button onClick={() => navigate("/page1/page2")}>Page2</button>
      <button onClick={() => navigate("/page1/page3")}>Page3</button>
      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}
