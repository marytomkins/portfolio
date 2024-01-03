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

const About = () => {
  const [showVerizon, setVerizon] = useState(false);

  return (
    <>
      <div className="header-space"></div>
      <Squares
        imgSrc={me}
        customImgStyle={{ boxShadow: "none" }}
        squareContent={
          <div className="text-container" style={{ color: $darkgreen }}>
            <div className="square-content-header">get to know me.</div>
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
      customContainerStyle={{ paddingBottom: "8rem"}}
        imgSrc={skills}
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
