import styled from "styled-components"
import { Theme } from "../styles/Theme"
import { Font } from "../styles/Common"

export const SectionTitle = styled.h2`
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 80px;
  position: relative;

  ${Font({Fmax: 36, Fmin: 30, weight: 600})}

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

    @media ${Theme.media.mobile} {
      bottom: -15px;
    }
  }
`