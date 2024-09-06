import React, { forwardRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import "./button.css";

const Button = forwardRef(
  ({ bgColor, textColor, className, onClick, ButtonText }, ref) => {
    console.log("button re-rendering*****");

    return (
      <div>
        <button
          ref={ref}
          style={{
            backgroundColor: bgColor || "grey",
            color: textColor || "white",
          }}
          className={className}
          onClick={onClick}
        >
          {ButtonText}
        </button>
      </div>
    );
  }
);

export default memo(Button);

// Higher order component || Higher order function
// compnent or function that takes an another
// component as an argument and return enhanced component
