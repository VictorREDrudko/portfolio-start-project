import styled, { css } from "styled-components"
import { Theme } from "../../../styles/Theme"
import { useState } from "react"

export const MobileMenu = (props: {menuItems: Array<string>}) => {
  // Динамическое открытие и закрытие меню Бургер
  const [menuIsOpen, setmenuIsopen] = useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsopen(!menuIsOpen);
  }

  return (
  <StyledMobileMenu>
    <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
      <span></span>
    </BurgerButton>
    <MobileMenuPopup isOpen={menuIsOpen} onClick={() => {setmenuIsopen(false)}}>
      <ul>
        {props.menuItems.map((element: string, index: number) => {
          return (
            <ListItemHeader key={index}>
              <LinkHeader href="#">{element}</LinkHeader>
            </ListItemHeader>
          )
        })}
      </ul>
    </MobileMenuPopup>
  </StyledMobileMenu>
  )
}

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${Theme.media.tablet} {
    display: block;
  }
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
  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    gap: 50px;
    flex-direction: column;
    align-items: center;
  }
`

const LinkHeader = styled.a`
  font-family: "Crimson Text";
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  transition: 0.5s all;
`

const ListItemHeader = styled.li`
  position: relative;
  transition: 0.5s all;
  &::after {
    content: "";
    display: inline-block;
    height: 2px;
    width: 100%;
    background-color: ${Theme.colors.hoverFont};
    transform: scale(0);
    position: absolute;
    top: 35px;
    left: 0;
    transition: 0.5s all;
  }

  &:hover {
    transform: scale(1.1);
    ${LinkHeader} {
      color: ${Theme.colors.hoverFont};
    }

    &::after {
      transform: scale(1);
    }
  }
`