import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      Code has been changed directly
      <Outlet />
    </div>
  );
}

export default Layout;
