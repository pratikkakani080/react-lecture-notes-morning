import React from "react";
import Button from "../../components/button";

function Login() {
  return (
    <div>
      This is login component{" "}
      <Button redirectPageName={"Users"} bgColor={"blue"} textColor={"yellow"} />
    </div>
  );
}

export default Login;
