import styled, { css } from "styled-components";
import { Theme } from "../styles/Theme";

export const Link = styled.a<{active?: boolean}>`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  transition: 0.5s all;
  transform: scale(1);

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${Theme.colors.hoverFont};
    position: absolute;
    top: 30px;
    left: 0;
    transform: scale(0);
    transition: 0.5s all;
  }

  &:hover {
    color: ${Theme.colors.hoverFont};
    transform: scale(1.2);

    &::before {
      transform: scale(1);
    }
  }

  ${props => props.active && css<{active?: boolean}>`
    color: ${Theme.colors.hoverFont};
    transform: scale(1.2);

    &::before {
      transform: scale(1);
    }
  `}
`