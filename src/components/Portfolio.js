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
import amCard from "../images/amCard.png";
import amLogo from "../images/amLogo.png";
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
  graphicContainer: {
    padding: "2rem 6rem",
  },
  graphics: {
    margin: "2rem 0 6rem",
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
    boxShadow: "-5px 4px 13px 0px rgb(0 0 0 / 18%)",
    borderRadius: "10px",
  },
};

const Portfolio = () => {
  return (
    <>
      <div className="page">
        <div className="header-space"></div>
        <Squares
          imgSrc={amCard}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $darkblue }}
            >
              <a
                className="square-content-header"
                href="https://aminteriorsnj.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={amLogo} className="logo-img"></img>
                <div className="square-content-header">aminteriorsnj.com</div>
              </a>
              <div className="square-content-subtext">
                branding. web development. web design. web management.
                <hr
                  style={{
                    background: $darkblue,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  designed/developed website and created brand identity for
                  <br />
                  local construction company, as well as managing the <br />{" "}
                  website content.
                </div>
              </div>
            </div>
          }
        />
        <Squares
          imgSrc={giftCard}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $darkblue }}
            >
              <a
                className="square-content-header"
                href="https://agiftfromtheheart.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={giftLogo} className="logo-img"></img>
                <div className="square-content-header">
                  agiftfromtheheart.org
                </div>
              </a>
              <div className="square-content-subtext">
                branding. web design. web management.
                <hr
                  style={{
                    background: $darkblue,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  designed website and created brand identity for local <br />{" "}
                  non-profit organization, as well as managing the website
                  content.
                </div>
              </div>
            </div>
          }
        />
        <Squares
          imgSrc={wordleCard}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $darkgreen }}
            >
              <a
                className="square-content-header"
                href="https://github.com/marytomkins/react-wordle/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={wordleLogo}
                  className="logo-img"
                  style={{ margin: "-1rem" }}
                ></img>
                <div className="square-content-header">new jersey wordle.</div>
              </a>
              <div className="square-content-subtext">
                web development.
                <hr
                  style={{
                    background: $darkgreen,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  created a new jersey themed wordle.
                </div>
              </div>
            </div>
          }
        />
        <Squares
          imgSrc={readCardHover}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $lightgreen }}
            >
              <a
                className="square-content-header"
                href="https://drive.google.com/file/d/15XvaVrpJFbKQamp0V9U8jEmn4-6wb_t_/view"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={readLogo}
                  className="logo-img"
                  style={{ marginBottom: "0" }}
                ></img>
                <div className="square-content-header">goodreads redesign.</div>
              </a>
              <div className="square-content-subtext">
                branding. ui/ux design.
                <hr
                  style={{
                    background: $lightgreen,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  conducted a mock-up ui/ux research & redesign case
                  <br />
                  study for a popular book-tracking app called goodreads.
                </div>
              </div>
            </div>
          }
        />
        <Squares
          imgSrc={altCardHover}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $lightblue }}
            >
              <a
                className="square-content-header"
                href="https://www.instagram.com/alt_enders_softball/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={altLogo} className="logo-img"></img>
                <div className="square-content-header">
                  alt enders softball.
                </div>
              </a>
              <div className="square-content-subtext">
                branding. social media management.
                <hr
                  style={{
                    background: $lightblue,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  designed and created logo and social media templates
                  <br /> for local men’s softball team (posts since oct 24
                  2023).
                </div>
              </div>
            </div>
          }
        />
        <Squares
          imgSrc={bbbCardHover}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $darkgreen }}
            >
              <a
                className="square-content-header"
                href="https://www.instagram.com/burlews_ballbusters/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={bbbLogo} className="logo-img"></img>
                <div className="square-content-header">
                  ballbusters softball.
                </div>
              </a>
              <div className="square-content-subtext">
                branding. social media management.
                <hr
                  style={{
                    background: $lightblue,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  designed and created logo and social media templates
                  <br /> for local men’s softball team (posts since oct 20
                  2023).
                </div>
              </div>
            </div>
          }
        />
        <Squares
          imgSrc={portfolioCard}
          customContainerStyle={{ paddingBottom: "8rem" }}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $darkblue }}
            >
              <a className="square-content-header">
                <img src={portfolioLogo} className="logo-img"></img>
                <div className="square-content-header">this website!</div>
              </a>
              <div className="square-content-subtext">
                branding. web development. web design. web management.
                <hr
                  style={{
                    background: $darkblue,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  created all branding (logo, icon, color scheme), designed
                  website, <br />
                  and developed UI.
                </div>
              </div>
            </div>
          }
        />
        <Line
          text={"view some code here."}
          linkTo="https://github.com/marytomkins"
          color={$darkgreen}
          background={$lightgreen}
        />
        <div className="graphics" style={{ ...styles.graphicContainer }}>
          <div className="square-content-header" style={{ color: $darkblue }}>
            graphics.
          </div>
          <div style={{ ...styles.graphics }}>
            <div className="active" style={{ ...styles.imgContainer }}>
              <LazyLoadImage
                className="hover-image-effect"
                src={graphic1}
                style={{ ...styles.graphicImg }}
              />
            </div>
            <div className="active" style={{ ...styles.imgContainer }}>
              <LazyLoadImage
                className="hover-image-effect"
                src={graphic2}
                style={{ ...styles.graphicImg }}
              />
            </div>
            <div className="active" style={{ ...styles.imgContainer }}>
              <LazyLoadImage
                className="hover-image-effect"
                src={graphic3}
                style={{ ...styles.graphicImg }}
              />
            </div>
            <div className="active" style={{ ...styles.imgContainer }}>
              <LazyLoadImage
                className="hover-image-effect"
                src={graphic4}
                style={{ ...styles.graphicImg }}
              />
            </div>
            <div className="active" style={{ ...styles.imgContainer }}>
              <LazyLoadImage
                className="hover-image-effect"
                src={graphic5}
                style={{ ...styles.graphicImg }}
              />
            </div>
            <div className="active" style={{ ...styles.imgContainer }}>
              <LazyLoadImage
                className="hover-image-effect"
                src={graphic6}
                style={{ ...styles.graphicImg }}
              />
            </div>
          </div>
        </div>
        <Line
          text={"view more graphics here."}
          linkTo="https://www.etsy.com/shop/EmptyArtt?ref=seller-platform-mcnav#items"
          color={$darkgreen}
          background={$lightgreen}
        />
      </div>
      <div className="mobile-page">
        <div className="header-space"></div>
        <Squares
          mobile
          imgSrc={amCard}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $darkblue }}
            >
              <a
                className="square-content-header"
                href="https://aminteriorsnj.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={amLogo} className="logo-img"></img>
                <div className="square-content-header">aminteriorsnj.com</div>
              </a>
              <div className="square-content-subtext">
                branding. web development. web design. web management.
                <hr
                  style={{
                    background: $darkblue,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  designed/developed website and created brand identity for
                  local construction company, as well as managing the website
                  content.
                </div>
              </div>
            </div>
          }
        />
        <Squares
          mobile
          imgSrc={giftCard}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $darkblue }}
            >
              <a
                className="square-content-header"
                href="https://agiftfromtheheart.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={giftLogo} className="logo-img"></img>
                <div className="square-content-header">
                  agiftfromtheheart.org
                </div>
              </a>
              <div className="square-content-subtext">
                branding. web design. web management.
                <hr
                  style={{
                    background: $darkblue,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  designed website and created brand identity for local
                  non-profit organization, as well as managing the website
                  content.
                </div>
              </div>
            </div>
          }
        />
        <Squares
          mobile
          imgSrc={wordleCard}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $darkgreen }}
            >
              <a
                className="square-content-header"
                href="https://github.com/marytomkins/react-wordle/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={wordleLogo} className="logo-img"></img>
                <div className="square-content-header">new jersey wordle.</div>
              </a>
              <div className="square-content-subtext">
                web development.
                <hr
                  style={{
                    background: $darkgreen,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  created a new jersey themed wordle.
                </div>
              </div>
            </div>
          }
        />
        <Squares
          mobile
          imgSrc={readCardHover}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $lightgreen }}
            >
              <a
                className="square-content-header"
                href="https://drive.google.com/file/d/15XvaVrpJFbKQamp0V9U8jEmn4-6wb_t_/view"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={readLogo}
                  className="logo-img"
                  style={{ marginBottom: "0" }}
                ></img>
                <div className="square-content-header">goodreads redesign.</div>
              </a>
              <div className="square-content-subtext">
                branding. ui/ux design.
                <hr
                  style={{
                    background: $lightgreen,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  conducted a mock-up ui/ux research & redesign case study for a
                  popular book-tracking app called goodreads.
                </div>
              </div>
            </div>
          }
        />
        <Squares
          mobile
          imgSrc={altCardHover}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $lightblue }}
            >
              <a
                className="square-content-header"
                href="https://www.instagram.com/alt_enders_softball/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={altLogo} className="logo-img"></img>
                <div className="square-content-header">
                  alt enders softball.
                </div>
              </a>
              <div className="square-content-subtext">
                branding. social media management.
                <hr
                  style={{
                    background: $lightblue,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  designed and created logo and social media templates for local
                  men’s softball team (posts since oct 24 2023).
                </div>
              </div>
            </div>
          }
        />
        <Squares
          mobile
          imgSrc={bbbCardHover}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $darkgreen }}
            >
              <a
                className="square-content-header"
                href="https://www.instagram.com/burlews_ballbusters/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={bbbLogo} className="logo-img"></img>
                <div className="square-content-header">
                  ballbusters softball.
                </div>
              </a>
              <div className="square-content-subtext">
                branding. social media management.
                <hr
                  style={{
                    background: $lightblue,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  designed and created logo and social media templates for local
                  men’s softball team (posts since oct 20 2023).
                </div>
              </div>
            </div>
          }
        />
        <Squares
          mobile
          imgSrc={portfolioCard}
          squareContent={
            <div
              className="text-container"
              id="portfolio"
              style={{ color: $darkblue }}
            >
              <a className="square-content-header">
                <img src={portfolioLogo} className="logo-img"></img>
                <div className="square-content-header">this website!</div>
              </a>
              <div className="square-content-subtext">
                branding. web development. web design. web management.
                <hr
                  style={{
                    background: $darkblue,
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className="square-content-subtext-subtext">
                  created all branding (logo, icon, color scheme), designed
                  website, and developed UI.
                </div>
              </div>
            </div>
          }
        />
        <Line
          text={"view some code here."}
          linkTo="https://github.com/marytomkins"
          color={$darkgreen}
          background={$lightgreen}
        />
        <div className="graphics" style={{ ...styles.graphicContainer }}>
          <div className="square-content-header" style={{ color: $darkblue, textAlign: "center" }}>
            graphics.
          </div>
          <div style={{ ...styles.graphics }}>
            <div className="active" style={{ ...styles.imgContainer }}>
              <LazyLoadImage
                className="hover-image-effect"
                src={graphic1}
                style={{ ...styles.graphicImg }}
              />
            </div>
            <div className="active" style={{ ...styles.imgContainer }}>
              <LazyLoadImage
                className="hover-image-effect"
                src={graphic2}
                style={{ ...styles.graphicImg }}
              />
            </div>
            <div className="active" style={{ ...styles.imgContainer }}>
              <LazyLoadImage
                className="hover-image-effect"
                src={graphic3}
                style={{ ...styles.graphicImg }}
              />
            </div>
            <div className="active" style={{ ...styles.imgContainer }}>
              <LazyLoadImage
                className="hover-image-effect"
                src={graphic4}
                style={{ ...styles.graphicImg }}
              />
            </div>
            <div className="active" style={{ ...styles.imgContainer }}>
              <LazyLoadImage
                className="hover-image-effect"
                src={graphic5}
                style={{ ...styles.graphicImg }}
              />
            </div>
            <div className="active" style={{ ...styles.imgContainer }}>
              <LazyLoadImage
                className="hover-image-effect"
                src={graphic6}
                style={{ ...styles.graphicImg }}
              />
            </div>
          </div>
        </div>
        <Line
          text={"view more graphics here."}
          linkTo="https://www.etsy.com/shop/EmptyArtt?ref=seller-platform-mcnav#items"
          color={$darkgreen}
          background={$lightgreen}
        />
      </div>
    </>
  );
};

export default Portfolio;
