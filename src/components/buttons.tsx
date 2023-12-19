import React, { useState } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  bgColor: "primary" | "secondary" | "danger";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  size?: "base" | "small" | "large";
  tooltip?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
};

function Button({
  children,
  onClick,
  bgColor = "primary",
  icon,
  iconPosition = "left",
  size = "base",
  tooltip,
  tooltipPosition = "top",
}: ButtonProps) {
  const iconClass = iconPosition === "right" ? "icon-rtl" : "";
  const [showTooltip, setShowTooltip] = useState(false);

  function handleHover(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (!tooltip) return;
    if (e.type === "mouseenter") {
      setTimeout(() => {
        setShowTooltip(true);
      }, 300);
    } else {
      setShowTooltip(false);
    }
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`btn btn-${bgColor} btn-${size} ${iconClass}`}
    >
      {icon && icon}
      {children}
      {tooltip && showTooltip && (
        <div className={`tooltip tooltip-${tooltipPosition}`}>{tooltip}</div>
      )}
    </button>
  );
}

export default Button;
export type { ButtonProps };
