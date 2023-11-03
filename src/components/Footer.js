import React from "react";
import "../App.css";
import { $lightblue } from "./colors";
import Squares from "./Squares";
import Image from "./Image";
import Tab from "./Tab";
import { tabs } from "./tabs";
import logo_hover from "../images/logos/initials1.JPG";
import logo from "../images/logos/initials2.JPG";

const styles = {
  footer: {
    height: "313px",
    backgroundColor: $lightblue,
    position: "relative",
    display: "flex",
  },
  text: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    color: "rgba(0, 0, 0, 0.65)",
    width: "100%",
    textAlign: "center",
    bottom: "10px",
    position: "absolute",
  },
};

const Footer = () => {
  return (
    <div className="footer" style={{ ...styles.footer }}>
      <Squares
        className="footer-squares"
        containerStyle={{ height: "inherit", justifyContent: "space-between" }}
        leftSide={
          <Image
            logo={logo}
            logoHover={logo_hover}
            customStyle={{
              link: {
                height: "inherit",
                margin: 0,
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              },
              logo: {
                borderRadius: "50%",
                width: "calc(100% - 50px)",
                maxWidth: "150px",
                position: "absolute",
              },
            }}
          />
        }
        leftSideStyle={{
          width: "45%",
          height: "inherit",
        }}
        rightSide={
          <div>
            <Tab tab={tabs["home"]} footer={true} />
            <Tab tab={tabs["about"]} footer={true} />
            <Tab tab={tabs["portfolio"]} footer={true} />
            <Tab tab={tabs["contact"]} footer={true} />
          </div>
        }
        rightSideStyle={{ width: "45%", display: "flex", alignItems: "center" }}
      />

      <div style={{ ...styles.text }}>Developed by MT© 2023</div>
    </div>
  );
};

export default Footer;
