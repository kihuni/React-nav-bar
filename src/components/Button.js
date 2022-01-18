import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  buttonStyle,
  buttonSize,
  onClick,
}) => {
  const checkButtonStyle = STYLES.include(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = STYLES.include(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
