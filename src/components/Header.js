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
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  height: "150px",
  padding: "1.5rem 0",
  overflow: "hidden",
  position: "relative",
  top: 0,
  zIndex: 99,
  width: "100%",
  backgroundColor: $background,
  transition: "all .3s linear",
};
const headerSides = {
  width: "40%",
  display: "flex",
  margin: "45px 0",
  transition: "all .3s linear",
};
const headerLogo = {
  width: "20%",
  transition: "all .3s linear",
};
const mobileHeader = {
  height: "100px",
  display: "flex",
  flexDirection: "row",
  margin: "1.5rem 0",
  justifyContent: "space-between",
};
const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  margin: auto 2rem;
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
    <div className="mobile-header" style={{ ...mobileHeader }}>
      <div>
        <Image
          id="headerLogo"
          logo={logo}
          customStyle={{
            link: {
              top: "10%",
              position: "relative",
              display: "flex",
              marginLeft: "2rem",
            },
            logo: { borderRadius: "50%", height: "100%" },
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <StyledBurger open={barsOpen} onClick={() => handleToggle()}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </div>
      {barsOpen && (
        <div style={{ maxWidth: "432px", width: "100%", position: "absolute" }}>
          <StyledMenu onClick={() => handleToggle()}>
            <Image
              logo={name}
              customStyle={{
                logo: { height: "auto", maxWidth: "90%" },
                link: { height: "auto", margin: "0" },
              }}
            />
            {Object.keys(tabs).map((tab) => (
              <Tab tab={tabs[tab]} mobile={true} />
            ))}
          </StyledMenu>
        </div>
      )}
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="header" style={{ ...headerStyle }}>
      <div className="headerLeft" style={{ ...headerSides }}>
        <Tab tab={tabs["home"]} />
        <Tab tab={tabs["about"]} />
      </div>
      <div className="logo" style={{ ...headerLogo }}>
        <Image
          id="headerLogo"
          logo={logo}
          logoHover={logo_hover}
          customStyle={{
            link: {
              top: "10%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            },
            logo: { borderRadius: "50%", height: "100%" },
          }}
        />
      </div>
      <div className="headerRight" style={{ ...headerSides }}>
        <Tab tab={tabs["portfolio"]} />
        <Tab tab={tabs["contact"]} />
      </div>
    </div>
  );
};

const Header = (props) => {
  let { isMobile } = props;

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const header = document.querySelector(".header");
      const tabLeft = document.querySelector(".headerLeft");
      const tabRight = document.querySelector(".headerRight");
      if (
        document.getElementById("root").clientHeight - 140 >
        window.innerHeight
      ) {
        if (window.scrollY > 0) {
          header.classList.add("no-padding-top");
          tabLeft.classList.add("no-margin");
          tabRight.classList.add("no-margin");
          header.classList.add("add-shadow");
        } else {
          tabLeft.classList.remove("no-margin");
          tabRight.classList.remove("no-margin");
          header.classList.remove("add-shadow");
          header.classList.remove("no-padding-top");
        }
      } else {
        tabLeft.classList.remove("no-margin");
        tabRight.classList.remove("no-margin");
        header.classList.remove("add-shadow");
        header.classList.remove("no-padding-top");
      }
    });
  }, []);

  return isMobile ? <MobileNavBar /> : <NavBar />;
};

export default Header;
