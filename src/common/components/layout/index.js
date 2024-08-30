import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      This is layout component
      <Outlet />
    </div>
  );
}

export default Layout;
