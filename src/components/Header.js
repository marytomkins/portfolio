import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "./Image";
import Tab from "./Tab";
import logo from "../images/logos/initials1.JPG";
import logo_hover from "../images/logos/initials2.JPG";
import name from "../images/logos/fullname2.JPG";
import { tabs } from "./tabs";
import { $background, $darkblue } from "./colors";
import { slideInRight } from "react-animations";

const slideIn = keyframes`${slideInRight}`;
const headerStyle = {
  flexDirection: "row",
  alignItems: "flex-start",
  top: "10%",
  right: 0,
  position: "absolute",
  zIndex: 99,
  transition: "all .3s linear",
};
const burger = {
  position: "absolute",
  top: "30px",
  right: "30px",
  cursor: "pointer",
  zIndex: "1000",
};
const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${$darkblue};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(46deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-46deg)" : "rotate(0)")};
    }
  }
`;
const StyledMenu = styled.div`
  animation: 1s ${slideIn};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0px;
  position: fixed;
  height: 100vh;
  min-height: 100vh;
  min-width: 100%;
  max-width: 432px;
  top: 0;
  right: 0;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
  background-color: ${$background};
  z-index: 1;
  a {
    font-size: 2rem;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;

const MobileNavBar = () => {
  const [barsOpen, setBarOpen] = useState(false);
  const handleToggle = () => {
    setBarOpen(!barsOpen);
  };
  return (
    <div className="mobile-header">
      <div style={{ ...burger }}>
        <StyledBurger open={barsOpen} onClick={() => handleToggle()}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </div>
      {barsOpen && (
        <div style={{ maxWidth: "800px", width: "100%", position: "absolute", zIndex: 999 }}>
          <StyledMenu onClick={() => handleToggle()}>
            <Image
              logo={name}
              customStyle={{
                logo: { height: "auto", maxWidth: "90%" },
                link: { height: "auto", margin: "0" },
              }}
            />
            <Tab tab={tabs["about"]} mobile={true} />
            <Tab tab={tabs["portfolio"]} mobile={true} />
            <Tab tab={tabs["contact"]} mobile={true} />
          </StyledMenu>
        </div>
      )}
    </div>
  );
};

const NavBar = () => {
  return (
    <div
      className="header transform -translate-x-1/3 -translate-y-1/2"
      style={{ ...headerStyle }}
    >
      <Tab tab={tabs["about"]} />
      <Tab tab={tabs["portfolio"]} />
      <Tab tab={tabs["contact"]} />
      <Image
        id="headerLogo"
        logo={logo}
        logoHover={logo_hover}
        customStyle={{
          link: { margin: "0 0rem 0 1rem" },
          logo: { borderRadius: "50%", height: "62px" },
        }}
      />
    </div>
  );
};

const Header = () => {
  return (
    <>
      <MobileNavBar />
      <NavBar />
    </>
  );
};

export default Header;
