import React, { useState } from "react";

const Line = (props) => {
  let { text, background, color, linkTo } = props;
  const [hover, setHover] = useState(false);

  const style = {
    div: {
      backgroundColor: background,
      textAlign: "center",
      padding: "14px 0",
      fontSize: "18px",
      fontWeight: 600,
      color: color,
    },
    hover: {
      opacity: "75%",
    },
    link: {
      color: color,
      textDecoration: "none",
    },
  };

  return linkTo ? (
    <div
      style={{ ...style.div, ...(hover && style.hover) }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <a
        style={{ ...style.link }}
        href={linkTo}
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    </div>
  ) : (
    <div
      style={{ ...style.div, ...(hover && style.hover) }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {text}
    </div>
  );
};

export default Line;
