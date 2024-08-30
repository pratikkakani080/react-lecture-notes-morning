import React from "react";
import { useNavigate } from "react-router-dom";
import "./button.css";

export default function Button({
  redirectPageName,
  bgColor,
  textColor,
  className,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    // if (redirectPageName === "Login") {
    //   navigate("/dashbaord");
    // } else {
    //   navigate("/login");
    // }
    // redirectPageName === "Login" ? "/dashboard" : "/login"
    navigate(`/${redirectPageName.toLowerCase()}`);
  };

  return (
    <div>
      {redirectPageName && (
        <button
          style={{
            backgroundColor: bgColor || "red",
            color: textColor || "white",
          }}
          className={className}
          onClick={handleClick}
        >
          Click to redirect to {redirectPageName || "test"}
        </button>
      )}
    </div>
  );
}
