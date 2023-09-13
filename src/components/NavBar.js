import React, { useState } from 'react';
import Hamburger from 'hamburger-react'
import styled from 'styled-components';
import {
  NavBtnLink,
  StyledMenu
} from '../styles/NavBarElements';

const StyledBurger = styled.button`
  position: absolute;
  top: 7%;
  right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#526786' : '#526786'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(46deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-46deg)' : 'rotate(0)'};
    }
  }
`

const Navbar = (props) => {

  let {
    homeRef,
    workRef,
    projectRef,
    academicRef,
    skillsRef,
    contactRef
  } = props;
  const [barsOpen, setBarOpen] = useState(false)
  const handleToggle = () => {
    setBarOpen(!barsOpen)
  }
  const tabs = [
    { name: 'Home.', background: "#CEEEFF", color: "#356B89" },
    { name: 'Work.', background: "#D8E267", color: "#00584B" },
    { name: 'Academics.', background: "#FC9D59", color: "#FFF" },
    { name: 'Projects.', background: "#D6FCCF", color: "#00584B" },
    { name: 'Skills.', background: "#F6D8F7", color: "#356B89" },
    { name: 'Contact.', background: "#00584B", color: "#FFF" },
  ]
  const handleScroll = (tab, e) => {
    e.preventDefault();
    switch (tab) {
      case 'Home.':
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 'Work.':
        workRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 'Projects.':
        projectRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 'Academics.':
        academicRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 'Skills.':
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 'Contact.':
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <>
      <div>
        <StyledBurger open={barsOpen} onClick={() => handleToggle()}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </div>
      {barsOpen &&
        <StyledMenu>
          {tabs.map(tab =>
            <NavBtnLink
              onClick={e => { handleScroll(tab.name, e); handleToggle() }}
              exact
              style={{ background: tab?.background, color: tab?.color }}
            >
              {tab.name}
            </NavBtnLink>
          )}
        </StyledMenu>
      }
    </>
  );
};

export default Navbar;