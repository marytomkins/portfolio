import React from "react";

const Squares = (props) => {
  let { imgSrc, squareContent, customImgStyle, customContainerStyle } = props;

  return (
    <div
      className="square-container active"
      style={{ ...customContainerStyle }}
    >
      <div style={{ display: "flex" }}>
        <img
          className="square-img fade-from-left hover-image-effect"
          loading="lazy"
          src={imgSrc}
          style={customImgStyle}
        />
        <div className="square-content fade-from-right">{squareContent}</div>
      </div>
    </div>
  );
};

export default Squares;
