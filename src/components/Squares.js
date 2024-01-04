import React from "react";

const MobileSquares = ({
  imgSrc,
  squareContent,
  customImgStyle,
  customContainerStyle,
}) => {
  return (
    <div
      className="mobile-square-container fade-in-section visible" // to add : active
      style={{ ...customContainerStyle }}
    >
      <img
        className="mobile-square-img"
        loading="lazy"
        src={imgSrc}
        style={customImgStyle}
      />
      <div className="square-content">{squareContent}</div>
    </div>
  );
};

const DesktopSquares = ({
  imgSrc,
  squareContent,
  customImgStyle,
  customContainerStyle,
}) => {
  return (
    <div
      className="square-container active" // to add : active
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

const Squares = (props) => {
  let { mobile, imgSrc, squareContent, customImgStyle, customContainerStyle } =
    props;

  return (
    <>
      {mobile ? (
        <MobileSquares
          imgSrc={imgSrc}
          squareContent={squareContent}
          customImgStyle={customImgStyle}
          customContainerStyle={customContainerStyle}
        />
      ) : (
        <DesktopSquares
          imgSrc={imgSrc}
          squareContent={squareContent}
          customImgStyle={customImgStyle}
          customContainerStyle={customContainerStyle}
        />
      )}
    </>
  );
};

export default Squares;
