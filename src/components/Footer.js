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
  footer: {},
  text: {},
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-tabs">
        <Tab tab={tabs["home"]} footer={true} />
        <Tab tab={tabs["about"]} footer={true} />
        <Tab tab={tabs["portfolio"]} footer={true} />
        <Tab tab={tabs["contact"]} footer={true} />
      </div>
      <div className="footer-disclaimer">
        developed by mt ©
        <div
          style={{ fontSize: "18px", display: "flex", alignItems: "center", marginLeft: "6px" }}
        >
          2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
