import React from "react";
// import Nav from "../Nav/Nav";
import { Outlet, useLocation } from "react-router-dom";
import Navcontents from "../Nav/Navcontents";

export default function Layout() {
  const location = useLocation();

  return (
    <div>
      {!location.pathname.startsWith("/admin") && <Navcontents />}{" "}
      <div
        className={` h-screen w-screen overflow-x-hidden ${
          location.pathname.startsWith("/admin") ? "" : "pt-24"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
