import React, { useState, useEffect } from "react";
import {
  $darkblue,
  $darkgreen,
  $lightblueBackground,
  $lightgreenBackground,
  $neongreen,
  $neongreenBackground,
  $orange,
  $orangeBackground,
  $purpleBackground,
} from "./colors";
import me from "../images/aboutimg.PNG";
import school from "../images/schoolimg.PNG";
import sync from "../images/sync.jpg";
import verizon from "../images/verizon.PNG";
import skills from "../images/skills.PNG";
import Squares from "./Squares";
import Line from "./Line";

const education = 300;
const synchrony = 1100;
const verizonn = 1800;
const skillss = 2500;
const marginBottom = 160;

const About = () => {
  const [active, setActive] = useState(false);
  const [activeE, setActiveE] = useState(false);
  const [activeS, setActiveS] = useState(false);
  const [activeV, setActiveV] = useState(false);
  const [activeSk, setActiveSk] = useState(false);

  const changeBackground = () => {
    const scroll = window.scrollY;
    let background = document.querySelector(".page");
    if (background) {
      if (scroll < education) {
        background.style.backgroundColor = $neongreenBackground;
      } else if (scroll >= education && scroll < synchrony) {
        setActiveE(true);
        background.style.backgroundColor = $orangeBackground;
      } else if (scroll >= synchrony && scroll < verizonn) {
        setActiveS(true);
        background.style.backgroundColor = $purpleBackground;
      } else if (scroll >= verizonn && scroll < skillss) {
        setActiveV(true);
        background.style.backgroundColor = $lightblueBackground;
      } else if (scroll >= skillss) {
        setActiveSk(true);
        background.style.backgroundColor = $lightgreenBackground;
      }
    }
  };

  const changeMobileBackground = () => {
    const scroll = window.scrollY;
    const pageLength = window.innerHeight;
    const sectionLength = pageLength + marginBottom;
    const halfPage = window.innerHeight / 2;
    let background = document.querySelector(".mobile-page");
    if (background) {
      if (scroll < halfPage + marginBottom) {
        background.style.backgroundColor = $neongreenBackground;
      } else if (
        scroll >= halfPage + marginBottom &&
        scroll < halfPage + sectionLength
      ) {
        setActiveE(true);
        background.style.backgroundColor = $orangeBackground;
      } else if (
        scroll >= 2 * sectionLength - halfPage &&
        scroll < 3 * sectionLength - halfPage
      ) {
        setActiveS(true);
        background.style.backgroundColor = $purpleBackground;
      } else if (
        scroll >= 3 * sectionLength - halfPage &&
        scroll < 4 * sectionLength - halfPage
      ) {
        setActiveV(true);
        background.style.backgroundColor = $lightblueBackground;
      } else if (scroll >= 4 * sectionLength - halfPage) {
        setActiveSk(true);
        background.style.backgroundColor = $lightgreenBackground;
      }
    }
  };

  useEffect(() => {
    setActive(true);
    if (window.innerWidth > 800) {
      window.addEventListener("scroll", changeBackground);
    } else if (window.innerWidth <= 800) {
      window.addEventListener("scroll", changeMobileBackground);
    }
  }, []);

  return (
    <>
      <div className="page" style={{ backgroundColor: $neongreenBackground }}>
        <div className="header-space"></div>
        <Squares
          imgSrc={me}
          customImgStyle={{ boxShadow: "none" }}
          active={active ? "active" : ""}
          squareContent={
            <div className="text-container" style={{ color: $darkgreen }}>
              <div className="square-content-header">a little about me.</div>
              <div className="square-content-subtext">
                my name is mary tomkins. i am 25. i am from new jersey
                <br /> and currently live in belmar. i have a black lab named
                enzo.
                <br /> i am a full time software engineer. i specialize in
                frontend <br />
                development and web design. i like to read, draw, and write.
                <br />
                my favorite color is green.
              </div>
            </div>
          }
        />
        <Squares
          imgSrc={school}
          active={activeE ? "active" : ""}
          squareContent={
            <div className="text-container" style={{ color: $darkblue }}>
              <div className="square-content-header">education.</div>
              <div className="square-content-subtext">
                Rutgers University - new brunswick, nj
                <br />
                sept 2016 - may 2020
                <br />
                <br />
                bachelor of science - computer science
                <br />
                <br />
                relevant coursework:
                <div className="square-content-subtext-subtext">
                  data structures. computer architecture. software engineering.{" "}
                  <br /> internet technologies. computer algorithms. database{" "}
                  <br /> management. operating systems.
                </div>
              </div>
            </div>
          }
        />
        <Squares
          imgSrc={sync}
          active={activeS ? "active" : ""}
          squareContent={
            <div className="text-container" style={{ color: $darkblue }}>
              <div className="square-content-header">
                current work experience.
              </div>
              <div className="square-content-subtext">
                Synchrony Financial
                <br />
                frontend engineer
                <br />
                may 2022 - present
                <br />
                <br />
                <div className="square-content-subtext-subtext">
                  working as a developer and designer to provide frontend <br />{" "}
                  improvements in react.js for applications built on <br />
                  Synchrony's Digital Acceleration Platform known as SyPI.
                </div>
              </div>
            </div>
          }
        />

        <Squares
          imgSrc={verizon}
          active={activeV ? "active" : ""}
          squareContent={
            <div className="text-container" style={{ color: $darkblue }}>
              <div className="square-content-header">past work experience.</div>
              <div className="square-content-subtext">
                Verizon
                <br />
                frontend engineer
                <br />
                jan 2021 - april 2022
                <br />
                <br />
                <div className="square-content-subtext-subtext">
                  worked as a frontend engineer on the Verizon ecommerce <br />
                  website and application in the digital sales department to{" "}
                  <br />
                  improve the user experience using react.js.
                </div>
              </div>
            </div>
          }
        />
        <Squares
          customContainerStyle={{ paddingBottom: "8rem" }}
          imgSrc={skills}
          customImgStyle={{ borderRadius: "50%" }}
          active={activeSk ? "active" : ""}
          squareContent={
            <div className="text-container" style={{ color: $darkgreen }}>
              <div className="square-content-header">skills.</div>
              <div className="square-content-subtext">
                programming languages:{" "}
                <div className="square-content-subtext-subtext">
                  html. css. javascript. java. python. c/c++. sql.
                </div>
                <br />
                libraries/frameworks:
                <div className="square-content-subtext-subtext">
                  react.js. redux. jquery. next.js. node.js. tailwind css.
                </div>
                <br />
                software:
                <div className="square-content-subtext-subtext">
                  gitlab/github/bitbucket. visual studio code. eclipse. <br />
                  aws. invision. figma. jira. procreate. canva.
                </div>
              </div>
            </div>
          }
        />
        <Line
          text={"view full resume here."}
          linkTo={
            "https://drive.google.com/file/d/1faxwydghyzlEKc3MXAm2zUe3Jy6PYTeK/view?usp=sharing"
          }
          color={$darkgreen}
          background={$neongreen}
        />
      </div>
      <div
        className="mobile-page"
        style={{ backgroundColor: $neongreenBackground }}
      >
        <div className="header-space"></div>
        <Squares
          mobile
          imgSrc={me}
          customImgStyle={{ boxShadow: "none", marginLeft: "-1rem" }}
          visible={active ? "visible" : ""}
          squareContent={
            <div className="text-container" style={{ color: $darkgreen }}>
              <div className="square-content-header">get to know me.</div>
              <div className="square-content-subtext">
                my name is mary tomkins. i am 25. i am from new jersey and
                currently live in belmar. i have a black lab named enzo. i am a
                full time software engineer. i specialize in frontend
                development and web design. i like to read, draw, and write. my
                favorite color is green.
              </div>
            </div>
          }
        />
        <Squares
          mobile
          imgSrc={school}
          visible={activeE ? "visible" : ""}
          squareContent={
            <div className="text-container" style={{ color: $darkblue }}>
              <div className="square-content-header">education.</div>
              <div className="square-content-subtext">
                Rutgers University - new brunswick, nj
                <br />
                sept 2016 - may 2020
                <br />
                <br />
                bachelor of science - computer science
                <br />
                <br />
                relevant coursework:
                <div className="square-content-subtext-subtext">
                  data structures. computer architecture. software engineering.
                  internet technologies. computer algorithms. database
                  management. operating systems.
                </div>
              </div>
            </div>
          }
        />
        <Squares
          mobile
          imgSrc={sync}
          visible={activeS ? "visible" : ""}
          squareContent={
            <div className="text-container" style={{ color: $darkblue }}>
              <div className="square-content-header">
                current work experience.
              </div>
              <div className="square-content-subtext">
                Synchrony Financial
                <br />
                frontend engineer
                <br />
                may 2022 - present
                <br />
                <br />
                <div className="square-content-subtext-subtext">
                  working as a developer and designer to provide frontend
                  improvements in react.js for applications built on Synchrony's
                  Digital Acceleration Platform known as SyPI.
                </div>
              </div>
            </div>
          }
        />
        <Squares
          mobile
          imgSrc={verizon}
          visible={activeV ? "visible" : ""}
          squareContent={
            <div className="text-container" style={{ color: $darkblue }}>
              <div className="square-content-header">past work experience.</div>
              <div className="square-content-subtext">
                Verizon
                <br />
                frontend engineer
                <br />
                jan 2021 - april 2022
                <br />
                <br />
                <div className="square-content-subtext-subtext">
                  worked as a frontend engineer on the Verizon ecommerce website
                  and application in the digital sales department to improve the
                  user experience using react.js.
                </div>
              </div>
            </div>
          }
        />
        <Squares
          mobile
          imgSrc={skills}
          visible={activeSk ? "visible" : ""}
          customImgStyle={{ borderRadius: "50%" }}
          squareContent={
            <div className="text-container" style={{ color: $darkgreen }}>
              <div className="square-content-header">skills.</div>
              <div className="square-content-subtext">
                programming languages:{" "}
                <div className="square-content-subtext-subtext">
                  html. css. javascript. java. python. c/c++. sql.
                </div>
                <br />
                libraries/frameworks:
                <div className="square-content-subtext-subtext">
                  react.js. redux. jquery. next.js. node.js. tailwind css.
                </div>
                <br />
                software:
                <div className="square-content-subtext-subtext">
                  gitlab/github/bitbucket. visual studio code. eclipse. <br />
                  aws. invision. figma. jira. procreate. canva.
                </div>
              </div>
            </div>
          }
        />
        <Line
          text={"view full resume here."}
          linkTo={
            "https://drive.google.com/file/d/1faxwydghyzlEKc3MXAm2zUe3Jy6PYTeK/view?usp=sharing"
          }
          color={$darkgreen}
          background={$neongreen}
        />
      </div>
    </>
  );
};

export default About;
