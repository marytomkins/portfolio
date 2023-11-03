import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const styles = {
  link: {
    height: "80%",
    margin: "auto 4rem",
    cursor: "pointer",
    display: "block",
  },
  logo: {
    height: "auto",
  },
  hover: {
    opacity: "75%",
  },
};

const Image = (props) => {
  let {
    className,
    logo,
    logoHover,
    customStyle,
    linkTo,
    portfolio = false,
  } = props;
  const [logoSrc, setLogo] = useState(logo);
  const [hover, setHover] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let interval;
    if (portfolio) {
      interval = setInterval(() => {
        setOpacity((o) => {
          return o === 1 ? 0 : 1;
        });
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [portfolio]);

  return (
    <Link
      className={className || "logoLink"}
      style={{ ...styles.link, ...customStyle.link }}
      to={linkTo || ""}
      target={linkTo ? "_blank" : ""}
    >
      <LazyLoadImage
        src={logoSrc}
        alt="mary tomkins"
        className={"logo"}
        style={{
          ...styles.logo,
          ...customStyle.logo,
          ...(hover && styles.hover),
          ...(portfolio && { position: "absolute" }),
        }}
        onMouseEnter={() => (logoHover ? setLogo(logoHover) : setHover(true))}
        onMouseOut={() => {
          setLogo(logo);
          setHover(false);
        }}
      />
      {portfolio && (
        <LazyLoadImage
          src={logoHover}
          alt="mary tomkins"
          className={"fade-image"}
          style={{
            ...styles.logo,
            ...customStyle.logo,
            ...(hover && styles.hover),
            position: "absolute",
            opacity: opacity,
          }}
          onMouseEnter={() => (logoHover ? setLogo(logoHover) : setHover(true))}
          onMouseOut={() => {
            setLogo(logo);
            setHover(false);
          }}
        />
      )}
    </Link>
  );
};

export default Image;
