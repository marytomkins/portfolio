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

const Contact = () => {
  return (
    <>
      <div className="header-space"></div>
      <div className="row">
        <a
          className="col"
          href="https://drive.google.com/file/d/1faxwydghyzlEKc3MXAm2zUe3Jy6PYTeK/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: $orange, color: $darkblue }}
        >
          <div className="emoji">📑</div>
          <div className="contact-text">resume.</div>
        </a>
        <a
          className="col"
          href="https://www.linkedin.com/in/mary-tomkins-90b37a174/"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: $neongreen, color: $darkgreen }}
        >
          <div className="emoji">👩‍💼</div>
          <div className="contact-text">linkedin.</div>
        </a>
      </div>
      <div className="row">
        <a
          className="col"
          href="https://github.com/marytomkins"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: $lightgreen, color: $darkgreen }}
        >
          <div className="emoji">👩‍💻</div>
          <div className="contact-text">github.</div>
        </a>
        <a
          className="col"
          href="mailto:maryctomkins@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: $purple, color: $darkblue }}
        >
          <div className="emoji">📧</div>
          <div className="contact-text">email.</div>
        </a>
      </div>
      <div className="row">
        <a
          className="col"
          href="https://www.etsy.com/shop/EmptyArtt?ref=seller-platform-mcnav#items"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: $lightblue, color: $darkblue }}
        >
          <div className="emoji">🎨</div>
          <div className="contact-text">etsy.</div>
        </a>
        <a
          className="col"
          href="https://www.instagram.com/emptyyart/"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: $darkblue, color: $lightblue }}
        >
          <div className="emoji">🤳</div>
          <div className="contact-text">instagram.</div>
        </a>
      </div>
    </>
  );
};

export default Contact;
