import React from "react";
import { NavLink } from "react-router-dom";
import {
  $darkblue,
  $purple,
  $orange,
  $neongreen,
  $darkgreen,
  $neongreenBackground,
} from "./colors";
import styled from "styled-components";

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

const Button = styled(NavLink)`
  font-family: "Playfair Display", serif !important;
  text-decoration: none;
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  margin-right: 10px;
  font-weight: 700;
  min-width: 9rem;
  text-align: center;
  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 75%;
  }
`;

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
        <div className="home-buttons">
          <Button style={{ color: $darkgreen, backgroundColor: $neongreen }} to="/about">
            learn about me. →
          </Button>
          <Button style={{ color: $darkblue, backgroundColor: $orange }} to="/portfolio">see my work. →</Button>
          <Button style={{ color: $darkblue, backgroundColor: $purple }} to="/contact">contact me. →</Button>
        </div>
        <div className="mobile-home-buttons">
          <Button style={{ color: $darkgreen, backgroundColor: $neongreen }} to="/about">
            learn about me. →
          </Button>
          <Button style={{ color: $darkblue, backgroundColor: $orange }} to="/portfolio">see my work. →</Button>
          <Button style={{ color: $darkblue, backgroundColor: $purple }} to="/contact">contact me. →</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
