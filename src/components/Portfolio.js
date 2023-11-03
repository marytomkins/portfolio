import React from "react";
import {
  $background,
  $darkblue,
  $darkgreen,
  $lightblue,
  $lightgreen,
  $neongreen,
  $orange,
  $purple,
} from "./colors";
import altCard from "../images/altCard.jpg";
import altCardHover from "../images/altCard_hver.JPG";
import altLogo from "../images/altLogo.JPG";
import amCard from "../images/amCard.JPG";
import amLogo from "../images/amLogo.png";
import amCardHover from "../images/amCard_hover.jpg";
import bbbCard from "../images/bbbCard.JPG";
import bbbCardHover from "../images/bbbCard_hover.JPG";
import bbbLogo from "../images/bbbLogo.JPG";
import giftCard from "../images/giftCard.JPG";
import giftCardHover from "../images/giftCard_hover.jpg";
import giftLogo from "../images/giftlogo.jpg";
import readCard from "../images/goodreadsCard.JPG";
import readCardHover from "../images/readsCard_hover.png";
import readLogo from "../images/goodreadslogo.PNG";
import portfolioCard from "../images/portfolioCard.JPG";
import portfolioLogo from "../images/logos/initials_trans1.PNG";
import wordleCard from "../images/wordle.png";
import wordleLogo from "../images/wordleLogo.png";
import graphic1 from "../images/graphic1.JPG";
import graphic2 from "../images/graphic2.JPG";
import graphic3 from "../images/graphic3.JPG";
import graphic4 from "../images/graphic4.JPG";
import graphic5 from "../images/graphic5.jpeg";
import graphic6 from "../images/graphic6.jpg";
import Image from "./Image";
import Squares from "./Squares";
import Line from "./Line";
import { LazyLoadImage } from "react-lazy-load-image-component";

const styles = {
  containerStyle: {
    flexWrap: "wrap",
  },
  flex: { flex: "1 1 450px", maxHeight: "500px", minHeight: "500px" },
  leftSide: { height: "inherit", textAlign: "left" },
  rightSide: { height: "inherit", textAlign: "right" },
  textContainer: {
    position: "relative",
    top: "50%",
    transform: "translate(0, -50%)",
    margin: "0 6rem",
    height: "inherit",
  },
  header: {
    fontSize: "40px",
    fontWeight: 600,
    marginBottom: ".5rem",
    textDecoration: "none",
  },
  subheader: {
    fontSize: "20px",
    fontWeight: 600,
  },
  subText: {
    fontSize: "18px",
    fontFamily: "Plus Jakarta Sans, sans-serif",
  },
  imgCard: {
    link: {
      display: "flex",
      justifyContent: "center",
      height: "inherit",
      margin: "1rem auto",
    },
    logo: {
      height: "90%",
      margin: "auto 4rem",
      display: "block",
      position: "relative",
      maxWidth: "100%",
      objectFit: "contain",
      maxHeight: "450px",
    },
  },
  leftLogo: {
    link: { height: "40%", margin: "0rem" },
    logo: {
      height: "100%",
      display: "block",
      position: "relative",
      maxWidth: "50%",
      objectFit: "contain",
      maxHeight: "228px",
    },
  },
  rightLogo: {
    link: {
      height: "40%",
      margin: "0rem",
      display: "flex",
      justifyContent: "flex-end",
    },
    logo: {
      height: "100%",
      display: "block",
      maxWidth: "50%",
      objectFit: "contain",
      maxHeight: "228px",
    },
  },
  graphicContainer: {
    padding: "2rem 6rem",
  },
  graphics: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    gap: "20px",
  },
  imgContainer: {
    flex: "1 1 30%",
    minWidth: "150px",
  },
  graphicImg: {
    maxWidth: "100%",
  },
};

const Portfolio = (props) => {
  let { isMobile } = props;

  return (
    <>
      <Squares
        containerStyle={{ ...styles.containerStyle }}
        leftSide={
          <Image
            logo={amCardHover}
            logoHover={amCard}
            customStyle={{ ...styles.imgCard }}
            portfolio={isMobile}
          />
        }
        leftSideStyle={{ ...styles.leftSide, ...styles.flex, display: "flex" }}
        rightSide={
          <div
            className="text-container"
            style={{ ...styles.textContainer, ...styles.rightTextContainers }}
          >
            <Image
              logo={amLogo}
              linkTo="https://aminteriorsnj.com/"
              customStyle={{ ...styles.rightLogo }}
            />
            <a
              className="portfolio-link"
              style={{ ...styles.header, color: $darkblue }}
              href="https://aminteriorsnj.com/"
              target="_blank"
              rel="noreferrer"
            >
              aminteriorsnj.com
            </a>
            <div
              className="portfolio-subheader"
              style={{ ...styles.subheader }}
            >
              branding. web development. web design. web management.
            </div>
            <hr
              style={{
                background: $darkblue,
                height: "1px",
                border: "none",
              }}
            />
            <div className="portfolio-subtext" style={{ ...styles.subText }}>
              designed/developed website and created brand identity for local
              construction company, as well as managing the website content.
            </div>
          </div>
        }
        rightSideStyle={{
          ...styles.rightSide,
          backgroundColor: $orange,
          color: $darkblue,
          ...styles.flex,
        }}
      />

      <Squares
        containerStyle={{ flexWrap: "wrap-reverse" }}
        leftSide={
          <div
            className="text-container"
            style={{ ...styles.textContainer, ...styles.rightTextContainers }}
          >
            <Image
              logo={giftLogo}
              linkTo="https://agiftfromtheheart.org/"
              customStyle={{ ...styles.leftLogo }}
            />
            <a
              className="portfolio-link"
              style={{ ...styles.header, color: $darkblue }}
              href="https://agiftfromtheheart.org/"
              target="_blank"
              rel="noreferrer"
            >
              agiftfromtheheart.org
            </a>
            <div
              className="portfolio-subheader"
              style={{ ...styles.subheader }}
            >
              branding. web development. web design. web management.
            </div>
            <hr
              style={{
                background: $darkblue,
                height: "1px",
                border: "none",
              }}
            />
            <div className="portfolio-subtext" style={{ ...styles.subText }}>
              designed website and created brand identity for local non profit
              organization, as well as managing the website content.
            </div>
          </div>
        }
        leftSideStyle={{
          ...styles.leftSide,
          backgroundColor: $purple,
          color: $darkblue,
          ...styles.flex,
        }}
        rightSide={
          <Image
            logo={giftCard}
            logoHover={giftCardHover}
            customStyle={{ ...styles.imgCard }}
            portfolio={isMobile}
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
          <Image logo={wordleCard} customStyle={{ ...styles.imgCard }} />
        }
        leftSideStyle={{ ...styles.leftSide, ...styles.flex, display: "flex" }}
        rightSide={
          <div
            className="text-container"
            style={{ ...styles.textContainer, ...styles.rightTextContainers }}
          >
            <Image
              logo={wordleLogo}
              linkTo="https://github.com/marytomkins/react-wordle"
              customStyle={{ ...styles.rightLogo }}
            />
            <a
              className="portfolio-link"
              style={{ ...styles.header, color: $darkgreen }}
              href="https://github.com/marytomkins/react-wordle"
              target="_blank"
              rel="noreferrer"
            >
              new jersey wordle.
            </a>
            <div lassName="portfolio-subheader" style={{ ...styles.subheader }}>
              frontend development.
            </div>
            <hr
              style={{
                background: $darkgreen,
                height: "1px",
                border: "none",
              }}
            />
            <div lassName="portfolio-subtext" style={{ ...styles.subText }}>
              created a new jersey-themed wordle clone.
            </div>
          </div>
        }
        rightSideStyle={{
          ...styles.rightSide,
          backgroundColor: $lightgreen,
          color: $darkgreen,
          ...styles.flex,
        }}
      />
      <Squares
        containerStyle={{ flexWrap: "wrap-reverse" }}
        leftSide={
          <div
            className="text-container"
            style={{ ...styles.textContainer, ...styles.rightTextContainers }}
          >
            <Image
              logo={readLogo}
              linkTo="https://drive.google.com/file/d/15XvaVrpJFbKQamp0V9U8jEmn4-6wb_t_/view?usp=sharing"
              customStyle={{ ...styles.leftLogo }}
            />
            <a
              className="portfolio-link"
              style={{ ...styles.header, color: $background }}
              href="https://drive.google.com/file/d/15XvaVrpJFbKQamp0V9U8jEmn4-6wb_t_/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              goodreads redesign.{" "}
            </a>
            <div
              className="portfolio-subheader"
              style={{ ...styles.subheader }}
            >
              branding. ui/ux design.
            </div>
            <hr
              style={{
                background: $background,
                height: "1px",
                border: "none",
              }}
            />
            <div className="portfolio-subtext" style={{ ...styles.subText }}>
              conducted a mock-up ui/ux research & redesign case study for a
              popular book-tracking app called goodreads.
            </div>
          </div>
        }
        leftSideStyle={{
          ...styles.leftSide,
          backgroundColor: $darkgreen,
          color: $background,
          ...styles.flex,
        }}
        rightSide={
          <Image
            logoHover={readCard}
            logo={readCardHover}
            customStyle={{ ...styles.imgCard }}
            portfolio={isMobile}
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
            logo={altCardHover}
            logoHover={altCard}
            customStyle={{ ...styles.imgCard }}
            portfolio={isMobile}
          />
        }
        leftSideStyle={{ ...styles.leftSide, ...styles.flex, display: "flex" }}
        rightSide={
          <div
            className="text-container"
            style={{ ...styles.textContainer, ...styles.rightTextContainers }}
          >
            <Image
              logo={altLogo}
              linkTo="https://www.instagram.com/alt_enders_softball/"
              customStyle={{ ...styles.rightLogo }}
            />
            <a
              className="portfolio-link"
              style={{ ...styles.header, color: $lightblue }}
              href="https://www.instagram.com/alt_enders_softball/"
              target="_blank"
              rel="noreferrer"
            >
              alt enders softball.
            </a>
            <div
              className="portfolio-subheader"
              style={{ ...styles.subheader }}
            >
              branding. social media templates.
            </div>
            <hr
              style={{
                background: $lightblue,
                height: "1px",
                border: "none",
              }}
            />
            <div className="portfolio-subtext" style={{ ...styles.subText }}>
              designed and created logo and social media templates for local
              men’s softball team (posts since oct 24 2023).
            </div>
          </div>
        }
        rightSideStyle={{
          ...styles.rightSide,
          backgroundColor: $darkblue,
          color: $lightblue,
          ...styles.flex,
        }}
      />

      <Squares
        containerStyle={{ flexWrap: "wrap-reverse" }}
        leftSide={
          <div
            className="text-container"
            style={{ ...styles.textContainer, ...styles.rightTextContainers }}
          >
            <Image
              logo={bbbLogo}
              linkTo="https://www.instagram.com/burlews_ballbusters/"
              customStyle={{ ...styles.leftLogo }}
            />
            <a
              className="portfolio-link"
              style={{ ...styles.header, color: $darkgreen }}
              href="https://www.instagram.com/burlews_ballbusters/"
              target="_blank"
              rel="noreferrer"
            >
              ballbuster’s softball.
            </a>
            <div
              className="portfolio-subheader"
              style={{ ...styles.subheader }}
            >
              branding. social media templates.
            </div>
            <hr
              style={{
                background: $darkgreen,
                height: "1px",
                border: "none",
              }}
            />
            <div className="portfolio-subtext" style={{ ...styles.subText }}>
              designed and created logo and social media templates for local
              men’s softball team (posts since oct 20 2023).
            </div>
          </div>
        }
        leftSideStyle={{
          ...styles.leftSide,
          backgroundColor: $neongreen,
          color: $darkgreen,
          ...styles.flex,
        }}
        rightSide={
          <Image
            logo={bbbCardHover}
            logoHover={bbbCard}
            customStyle={{ ...styles.imgCard }}
            portfolio={isMobile}
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
          <Image logo={portfolioCard} customStyle={{ ...styles.imgCard }} />
        }
        leftSideStyle={{ ...styles.leftSide, ...styles.flex, display: "flex" }}
        rightSide={
          <div
            className="text-container"
            style={{ ...styles.textContainer, ...styles.rightTextContainers }}
          >
            <Image logo={portfolioLogo} customStyle={{ ...styles.rightLogo }} />
            <div
              className="portfolio-link"
              style={{ ...styles.header, cursor: "pointer", color: $darkblue }}
            >
              this website!
            </div>
            <div
              className="portfolio-subheader"
              style={{ ...styles.subheader }}
            >
              branding. web development. web design. web management.
            </div>
            <hr
              style={{
                background: $darkblue,
                height: "1px",
                border: "none",
              }}
            />
            <div className="portfolio-subtext" style={{ ...styles.subText }}>
              created all branding (logo, icon, color scheme), designed website,
              and developed UI.
            </div>
          </div>
        }
        rightSideStyle={{
          ...styles.rightSide,
          backgroundColor: $orange,
          color: $darkblue,
          ...styles.flex,
        }}
      />
      <Line
        text={"view some code here."}
        linkTo="https://github.com/marytomkins"
        color={$darkgreen}
        background={$lightgreen}
      />
      <div className="graphics" style={{ ...styles.graphicContainer }}>
        <div style={{ ...styles.header, color: $darkblue }}>graphics.</div>
        <div style={{ ...styles.graphics }}>
          <div style={{ ...styles.imgContainer }}>
            <LazyLoadImage src={graphic1} style={{ ...styles.graphicImg }} />
          </div>
          <div style={{ ...styles.imgContainer }}>
            <LazyLoadImage src={graphic2} style={{ ...styles.graphicImg }} />
          </div>
          <div style={{ ...styles.imgContainer }}>
            <LazyLoadImage src={graphic3} style={{ ...styles.graphicImg }} />
          </div>
          <div style={{ ...styles.imgContainer }}>
            <LazyLoadImage src={graphic4} style={{ ...styles.graphicImg }} />
          </div>
          <div style={{ ...styles.imgContainer }}>
            <LazyLoadImage src={graphic5} style={{ ...styles.graphicImg }} />
          </div>
          <div style={{ ...styles.imgContainer }}>
            <LazyLoadImage src={graphic6} style={{ ...styles.graphicImg }} />
          </div>
        </div>
      </div>
      <Line
        text={"view more graphics here."}
        linkTo="https://www.etsy.com/shop/EmptyArtt?ref=seller-platform-mcnav#items"
        color={$darkgreen}
        background={$lightgreen}
      />
    </>
  );
};

export default Portfolio;
