import styled from "styled-components"
import { Theme } from "../styles/Theme"

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 5px;
  margin-bottom: 80px;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${Theme.colors.font};
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
  }
`