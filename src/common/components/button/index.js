import React from "react";
import { useNavigate } from "react-router-dom";
import "./button.css";

export default function Button({
  bgColor,
  textColor,
  className,
  onClick,
  ButtonText
}) {
  return (
    <div>
        <button
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
