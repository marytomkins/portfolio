import React, { useState } from "react";
import {
  $darkblue,
  $darkgreen,
  $lightgreen,
  $neongreen,
  $orange,
  $purple,
} from "./colors";
import me from "../images/aboutimg.PNG";
import school from "../images/schoolimg.PNG";
import sync from "../images/sync.jpg";
import verizon from "../images/verizon.PNG";
import skills from "../images/skills.PNG";
import Image from "./Image";
import Squares from "./Squares";
import Line from "./Line";

const styles = {
  containerStyle: {
    flexWrap: "wrap",
  },
  flex: { flex: "1 1 450px", maxHeight: "500px", minHeight: "450px" },
  leftSide: { height: "inherit", textAlign: "left" },
  rightSide: { height: "inherit", textAlign: "right" },
  textContainer: {
    position: "relative",
    top: "50%",
    transform: "translate(0, -50%)",
    margin: "0 6rem",
  },
  header: {
    fontSize: "45px",
    fontWeight: 600,
    marginBottom: "1.5rem",
  },
  subText: {
    fontSize: "18px",
    fontFamily: "Plus Jakarta Sans, sans-serif",
  },
};

const About = () => {
  const [showVerizon, setVerizon] = useState(false);

  return (
    <>
      <Squares
        containerStyle={{ ...styles.containerStyle }}
        leftSide={
          <Image
            className="about-logo"
            logo={me}
            customStyle={{
              link: { height: "inherit", margin: "1rem auto" },
              logo: {
                height: "90%",
                margin: "auto",
                display: "block",
                top: "5%",
                position: "relative",
                maxWidth: "100%",
                objectFit: "contain",
                maxHeight: "450px",
              },
            }}
          />
        }
        leftSideStyle={{ ...styles.leftSide, ...styles.flex, display: "flex" }}
        rightSide={
          <div
            className="text-container"
            style={{ ...styles.textContainer, ...styles.rightTextContainers }}
          >
            <div style={{ ...styles.header }}>get to know me.</div>
            <div style={{ ...styles.subText }}>
              my name is mary tomkins. i am 25. i am from new jersey and
              currently live in belmar. i have a black lab named enzo. i am a
              full time software engineer. i specialize in frontend development
              and web design. i like to read, draw, and write. my favorite color
              is green.
            </div>
          </div>
        }
        rightSideStyle={{
          ...styles.rightSide,
          backgroundColor: $neongreen,
          color: $darkgreen,
          ...styles.flex,
        }}
      />
      <Squares
        containerStyle={{ flexWrap: "wrap-reverse" }}
        leftSide={
          <div className="text-container" style={{ ...styles.textContainer }}>
            <div style={{ ...styles.header }}>education.</div>
            <div style={{ ...styles.subText }}>
              Rutgers University - new brunswick, nj
              <br />
              sept 2016 - may 2020
              <br />
              <br />
              bachelor of science - computer science
              <br />
              <br />
              relevant coursework: data structures. computer architecture.
              software engineering. internet technologies. computer algorithms.
              database management. operating systems.
            </div>
          </div>
        }
        leftSideStyle={{
          ...styles.leftSide,
          backgroundColor: $orange,
          color: $darkblue,
          ...styles.flex,
        }}
        rightSide={
          <Image
            logo={school}
            customStyle={{
              link: { margin: "auto" },
              logo: {
                height: "90%",
                margin: "auto",
                display: "block",
                top: "5%",
                position: "relative",
                maxWidth: "100%",
                objectFit: "contain",
                maxHeight: "450px",
              },
            }}
          />
        }
        rightSideStyle={{
          ...styles.rightSide,
          ...styles.flex,
          display: "flex",
        }}
      />
      <Squares
        containerStyle={{ ...styles.containerStyle }}
        leftSide={
          <Image
            logo={sync}
            customStyle={{
              link: { height: "inherit", margin: "auto" },
              logo: {
                height: "90%",
                margin: "auto",
                display: "block",
                top: "5%",
                position: "relative",
                maxWidth: "100%",
                objectFit: "contain",
                maxHeight: "450px",
              },
            }}
          />
        }
        leftSideStyle={{ ...styles.leftSide, ...styles.flex, display: "flex" }}
        rightSide={
          <div
            className="text-container"
            style={{ ...styles.textContainer, ...styles.rightTextContainers }}
          >
            <div style={{ ...styles.header }}>work experience.</div>
            <div style={{ ...styles.subText, fontSize: "25px" }}>
              Synchrony Financial
              <br />
            </div>
            <div style={{ ...styles.subText }}>
              frontend engineer
              <br />
              may 2022 - present
              <br />
              <br />
              working as a developer and designer to provide frontend
              improvements in react.js for applications built on Synchrony's
              Digital Acceleration Platform known as SyPI.
            </div>
          </div>
        }
        rightSideStyle={{
          ...styles.rightSide,
          backgroundColor: $purple,
          color: $darkblue,
          ...styles.flex,
        }}
      />
      <div
        style={{
          cursor: "pointer",
          ...(showVerizon
            ? { display: "none", opacity: 0 }
            : { display: "block", opacity: 1 }),
        }}
        onClick={() => setVerizon(true)}
      >
        <Line
          text={"view more work experience."}
          color={$darkgreen}
          background={$neongreen}
        />
      </div>
      <div
        style={{
          ...(showVerizon
            ? { display: "block", opacity: 1 }
            : { display: "none", opacity: 1 }),
          transition: "all 1s ease-in",
        }}
      >
        <Squares
          containerStyle={{ ...styles.containerStyle }}
          leftSide={
            <Image
              logo={verizon}
              customStyle={{
                link: { height: "inherit" },
                logo: {
                  height: "90%",
                  margin: "auto",
                  display: "block",
                  top: "5%",
                  position: "relative",
                  maxWidth: "100%",
                  objectFit: "contain",
                  maxHeight: "450px",
                },
              }}
            />
          }
          leftSideStyle={{
            ...styles.leftSide,
            ...styles.flex,
            display: "flex",
          }}
          rightSide={
            <div
              className="text-container"
              style={{
                ...styles.textContainer,
                ...styles.rightTextContainers,
              }}
            >
              <div style={{ ...styles.subText, fontSize: "25px" }}>
                Verizon
                <br />
              </div>
              <div style={{ ...styles.subText }}>
                frontend engineer
                <br />
                jan 2021 - april 2022
                <br />
                <br />
                worked as a frontend engineer on the Verizon ecommerce website
                and application in the digital sales department to improve the
                user experience using react.js.
              </div>
            </div>
          }
          rightSideStyle={{
            ...styles.rightSide,
            backgroundColor: "rgb(243 202 244)",
            color: $darkblue,
            ...styles.flex,
          }}
        />
        <div style={{ cursor: "pointer" }} onClick={() => setVerizon(false)}>
          <Line
            text={"hide more work experience."}
            color={$darkgreen}
            background={$neongreen}
          />
        </div>
      </div>
      <Squares
        containerStyle={{ flexWrap: "wrap-reverse" }}
        leftSide={
          <div className="text-container" style={{ ...styles.textContainer }}>
            <div style={{ ...styles.header }}>skills.</div>
            <div style={{ ...styles.subText }}>
              programming languages: html. css. javascript. java. python. c/c++.
              sql.
              <br />
              <br />
              libraries/frameworks: react.js. redux. jquery. next.js. node.js.
              tailwind css.
              <br />
              <br />
              software: gitlab/github/bitbucket. visual studio code. eclipse.
              aws. invision. figma. jira. procreate. canva.
            </div>
          </div>
        }
        leftSideStyle={{
          ...styles.leftSide,
          backgroundColor: $lightgreen,
          color: $darkgreen,
          ...styles.flex,
        }}
        rightSide={
          <Image
            logo={skills}
            customStyle={{
              link: { height: "inherit", margin: "auto" },
              logo: {
                height: "90%",
                margin: "auto",
                display: "block",
                top: "5%",
                position: "relative",
                maxWidth: "100%",
                objectFit: "contain",
                maxHeight: "450px",
              },
            }}
          />
        }
        rightSideStyle={{
          ...styles.rightSide,
          ...styles.flex,
          display: "flex",
        }}
      />
      <Line
        text={"view entire resume here."}
        linkTo={
          "https://drive.google.com/file/d/1faxwydghyzlEKc3MXAm2zUe3Jy6PYTeK/view?usp=sharing"
        }
        color={$darkgreen}
        background={$neongreen}
      />
    </>
  );
};

export default About;
