import styled, { css } from "styled-components";
import { Theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

// from Menu
const LinkHeader = styled(Link)`
  font-family: "Crimson Text";
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  transition: ${Theme.animation.transition};
  color: ${Theme.colors.noAccent};
  cursor: pointer;

  &::after {
    content: "";
    display: inline-block;
    height: 2px;
    width: 100%;
    background-color: ${Theme.colors.font};
    transform: scale(0);
    position: absolute;
    top: 35px;
    left: 0;
    transition: ${Theme.animation.transition};
  }

  &:hover, &.active {
    transform: scale(1.1);
    transition: ${Theme.animation.transition};
    & {
      color: ${Theme.colors.font};
    }

    &::after {
      transform: scale(1);
    }
  }
`

const MenuItem = styled.li`
  position: relative;
  transition: 0.5s all;
`

// from Mobile menu
const MobileMenu = styled.nav`
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  z-index: 99999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${Theme.colors.font};
    position: absolute;
    left: -50px;
    top: 0px;

    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}


    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${Theme.colors.font};
      position: absolute;
      transform: translateY(-10px); 

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${Theme.colors.font};
      position: absolute;
      transform: translateY(10px); 

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: ${Theme.animation.transition};

  ul {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    transition: ${Theme.animation.transition};
  }

  ${props => props.isOpen && css<{isOpen: boolean}>`
    transform: translateY(0);
    & ul {
      gap: 50px;
    }
  `}
`

// from Desktop menu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
  }
`

export const S = {
  LinkHeader,
  MenuItem,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
  DesktopMenu
}