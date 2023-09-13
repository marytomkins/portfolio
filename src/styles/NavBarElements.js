import { NavLink as Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { slideInRight, fadeInLeft } from 'react-animations';

const menuAnimation = keyframes`${slideInRight}`;
const logoAnimation = keyframes`${fadeInLeft}`;

export const Burger = styled.div`
  position: absolute;
  top: 5%;
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
`;

export const NavBtnLink = styled.button`
  font-family: 'Cabin', sans-serif;
  padding: 1rem;
  color: #263D59;
  font-size: 24px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s linear;
  text-decoration: none;
  background-color: #fff;
  flex-grow: 1;
  &:hover {
    transition: color 0.3s linear;
    background: #f0f0f0;
    color: #808080;
  }
  &.active {
    color: #f0f0f0;
  }
`;

export const StyledMenu = styled.div`
  animation: 1s ${menuAnimation};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-width: 25vw;
  text-align: center;
  padding: 0px;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
  background-color: #F5FFF3;
  z-index: 1001;
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: #000000
    }
    &:active {
      color: #000000
    }
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;