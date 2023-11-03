import React from "react";
import {
  $darkblue,
  $darkgreen,
  $lightblue,
  $lightgreen,
  $neongreen,
  $orange,
  $purple,
} from "./colors";
import Squares from "./Squares";

const styles = {
  contactContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
  },
  containerStyle: {
    height: "calc(100vh - 511px)",
    width: "calc(100vw/3)",
    flex: "1 1 475px",
  },
  squares: {
    position: "relative",
    cursor: "pointer",
    height: "inherit",
    textAlign: "right",
    display: "inline-table",
  },
  text: {
    position: "absolute",
    fontSize: "35px",
    fontWeight: "600",
    textDecoration: "none",
    height: "-webkit-fill-available",
    width: "-webkit-fill-available",
    margin: "4rem",
    display: "inline-grid",
    alignItems: "flex-end",
  },
  hover: {
    opacity: "75%",
  },
};

const Contact = () => {
  return (
    <div className="contact-squares" style={{ ...styles.contactContainer }}>
      <Squares
        containerName="contact"
        className="contact-square"
        containerStyle={styles.containerStyle}
        leftSide={
          <a
            className="contact-link"
            href="https://drive.google.com/file/d/1faxwydghyzlEKc3MXAm2zUe3Jy6PYTeK/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{ ...styles.text, left: 0, color: $darkblue }}
          >
            resume.
          </a>
        }
        leftSideStyle={{
          ...styles.squares,
          backgroundColor: $orange,
        }}
        leftHover
        rightSide={
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/mary-tomkins-90b37a174/"
            target="_blank"
            rel="noreferrer"
            style={{ ...styles.text, right: 0, color: $darkgreen }}
          >
            linkedin.
          </a>
        }
        rightSideStyle={{
          ...styles.squares,
          backgroundColor: $neongreen,
        }}
        rightHover
      />
      <Squares
        containerName="contact"
        className="contact-square"
        containerStyle={styles.containerStyle}
        leftSide={
          <a
            className="contact-link"
            href="https://github.com/marytomkins"
            target="_blank"
            rel="noreferrer"
            style={{ ...styles.text, left: 0, color: $darkgreen }}
          >
            github.
          </a>
        }
        leftSideStyle={{
          ...styles.squares,
          backgroundColor: $lightgreen,
        }}
        leftHover
        rightSide={
          <a
            className="contact-link"
            href="mailto:maryctomkins@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ ...styles.text, right: 0, color: $darkblue }}
          >
            email.
          </a>
        }
        rightSideStyle={{
          ...styles.squares,
          backgroundColor: $purple,
        }}
        rightHover
      />
      <Squares
        containerName="contact"
        className="contact-square"
        containerStyle={styles.containerStyle}
        leftSide={
          <a
            className="contact-link"
            href="https://www.etsy.com/shop/EmptyArtt?ref=seller-platform-mcnav#items"
            target="_blank"
            rel="noreferrer"
            style={{ ...styles.text, left: 0, color: $lightgreen }}
          >
            etsy.
          </a>
        }
        leftSideStyle={{
          ...styles.squares,
          backgroundColor: $darkgreen,
        }}
        leftHover
        rightSide={
          <a
            className="contact-link"
            href="https://www.instagram.com/emptyyart/"
            target="_blank"
            rel="noreferrer"
            style={{ ...styles.text, right: 0, color: $lightblue }}
          >
            instagram.
          </a>
        }
        rightSideStyle={{
          ...styles.squares,
          backgroundColor: $darkblue,
        }}
        rightHover
      />
    </div>
  );
};

export default Contact;
