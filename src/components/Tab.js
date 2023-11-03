import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { $background, $darkblue, $lightblue } from "./colors";

const Tab = (props) => {
  let { tab, footer, mobile } = props;

  const Link = styled(NavLink)`
    font-family: "Playfair Display", serif !important;
    align-items: center;
    cursor: pointer;
    display: ${footer ? "block" : "inline-flex"};
    font-size: 20px;
    font-weight: 600;
    justify-content: center;
    outline: 0;
    margin: ${footer ? "10px" : "0"};
    padding: ${footer ? "0" : "0 1rem"};
    text-decoration: none;
    transition: all 0.3s;
    border: 0px;
    height: ${footer ? "auto" : "60px"};
    width: ${mobile ? "100%" : "50%"};
    color: ${$darkblue};
    background-color: ${mobile
      ? tab.hoverBackground
      : footer
      ? $lightblue
      : $background};
    &.active {
      background-color: ${footer
        ? $lightblue
        : tab.id === "home" && !mobile
        ? $background
        : tab.hoverBackground};
    }
    &:hover {
      transition: all 0.2s ease-in-out;
      background-color: ${footer ? $lightblue : tab.hoverBackground};
    }
  `;

  return (
    <Link
      className="tab"
      to={tab.link}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {tab.name}
    </Link>
  );
};

export default Tab;