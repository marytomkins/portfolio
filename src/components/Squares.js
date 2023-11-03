import React, { useState } from "react";
import { $darkblue } from "./colors";

const styles = {
  container: {
    display: "flex",
    width: "100%",
    color: $darkblue,
  },
  side: { width: "50%" },
  hover: { opacity: "75%" },
};

const Squares = (props) => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  let {
    containerName,
    className,
    leftSide,
    rightSide,
    leftSideStyle = {},
    rightSideStyle = {},
    containerStyle = {},
    leftHover = false,
    rightHover = false,
  } = props;

  return (
    <div
      className={containerName || "container"}
      style={{ ...styles.container, ...containerStyle }}
    >
      <div
        className={className || "square-side"}
        style={{
          ...styles.side,
          ...leftSideStyle,
          ...(hoverLeft && styles.hover),
        }}
        onMouseEnter={() => {
          leftHover && setHoverLeft(true);
        }}
        onMouseLeave={() => {
          leftHover && setHoverLeft(false);
        }}
      >
        {leftSide}
      </div>
      <div
        className={className || "square-side"}
        style={{
          ...styles.side,
          ...rightSideStyle,
          ...(hoverRight && styles.hover),
        }}
        onMouseEnter={() => {
          rightHover && setHoverRight(true);
        }}
        onMouseLeave={() => {
          leftHover && setHoverRight(false);
        }}
      >
        {rightSide}
      </div>
    </div>
  );
};

export default Squares;
