import React from "react";
import logo from "../images/logos/fullname1.JPG";
import logo_hover from "../images/logos/fullname2.JPG";
import homepageimg from "../images/homepageimg.PNG";
import Image from "./Image";
import Squares from "./Squares";

const styles = {
  leftSide: {
    height: "auto",
    margin: "auto",
  },
  flex: { flex: "1 1 450px" },
  text: { fontSize: "35px", fontWeight: "800", marginLeft: "2rem" },
  subText: { fontSize: "20px", fontWeight: "800", textAlign: "right" },
};

const Home = (props) => {
  let { isMobile } = props;
  return (
    <Squares
      containerStyle={{
        width: "calc(100% - 4rem)",
        margin: "0 2rem 2rem",
        flexWrap: "wrap-reverse",
        flexDirection: "row",
      }}
      leftSide={
        <div>
          <div style={{ ...styles.text }}>hi, i'm</div>
          <Image
            logo={logo}
            logoHover={logo_hover}
            customStyle={{
              logo: { height: "auto", maxWidth: "100%" },
              link: { height: "auto", margin: "auto" },
            }}
          />
          <div style={{ ...styles.subText }}>
            software engineer.
            <br />
            ui/ux designer.
            <br />
            graphic designer.
            <br />
            illustrator.
          </div>
        </div>
      }
      leftSideStyle={{
        ...styles.leftSide,
        ...styles.flex,
        ...(!isMobile && { paddingLeft: "2rem" }),
      }}
      rightSide={
        <Image
          logo={homepageimg}
          customStyle={{
            link: { height: "auto", margin: "1rem auto" },
            logo: {
              height: "90%",
              margin: "auto",
              display: "block",
              maxWidth: "100%",
              objectFit: "contain",
              maxHeight: "600px",
            },
          }}
        />
      }
      rightSideStyle={{ margin: "auto", ...styles.flex }}
    />
  );
};

export default Home;
