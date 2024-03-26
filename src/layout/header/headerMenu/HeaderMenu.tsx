import styled from "styled-components"
import { Theme } from "../../../styles/Theme"

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
  return (
  <StyledHeaderMenu>
    <ul>
      {props.menuItems.map((element: string, index: number) => {
        return (
          <ListItemHeader key={index}>
            <LinkHeader href="#">{element}</LinkHeader>
          </ListItemHeader>
        )
      })}
    </ul>
  </StyledHeaderMenu>
  )
}

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
  }
`

const LinkHeader = styled.a`
  font-family: "Crimson Text";
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  color: ${Theme.colors.font};
  transition: 0.5s all;
`

const ListItemHeader = styled.li`
  position: relative;

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
    ${LinkHeader} {
      color: ${Theme.colors.hoverFont};
      font-size: 26px;
    }

    &::after {
      transform: scale(1);
    }
  }
`