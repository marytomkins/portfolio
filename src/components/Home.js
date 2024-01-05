import React from "react";
import { $darkblue, $purple, $orange } from "./colors";

const styles = {
  homeStyle: { height: "100vh" },
  containerStyle: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    color: $darkblue,
    top: "50%",
    left: "45%",
    position: "absolute",
    alignItems: "flex-start",
  },
};

const Home = () => {
  return (
    <div className="home" style={{ ...styles.homeStyle }}>
      <div
        className="container transform -translate-x-1/2 -translate-y-1/2"
        style={{ ...styles.containerStyle }}
      >
        <div className="name">
          hi, i'm <span style={{ color: $purple }}>mary</span>{" "}
          <span style={{ color: $orange }}>tomkins.</span>
        </div>
        <div className="subText">
          software engineer. ui/ux designer. graphic designer. illustrator.
        </div>
      </div>
    </div>
  );
};

export default Home;
