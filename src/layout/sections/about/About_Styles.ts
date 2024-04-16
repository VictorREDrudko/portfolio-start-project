import styled from "styled-components"
import { Theme } from "../../../styles/Theme"
import { Font } from "../../../styles/Common"

const About = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextWrapper = styled.div`
  margin: 40px 0;
`

const MyPhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin: 0 30px 0 10px;

  @media ${Theme.media.mobile} {
    margin: 0 10px;
    }

  &::before {
    content: "";
    width: 100%;
    height: 110%;
    border: 1px solid ${Theme.colors.font};
    position: absolute;
    top: -25px;
    left: 25px;
    z-index: -1;
    border-radius: 25px;

    @media ${Theme.media.mobile} {
      top: -15px;
      left: 15px;
    }
  }
`

const Photo = styled.img`
  max-width: 630px;
  width: 100%;
  height: auto;
  z-index: 1;
  box-shadow: 2px 2px 24px 24px rgba(28, 26, 26, 0.6);
  border-radius: 25px;
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${Theme.colors.textColor};
`

const MyName = styled.h2`
  ${Font({Fmax: 50, Fmin: 36, weight: 700})};
`

const MainTitle = styled.h1`
  ${Font({Fmax: 27, Fmin: 20, weight: 400, color: Theme.colors.textColor})};
  p {
    display: none;
  }
`

export const S = {
  About,
  TextWrapper,
  MyPhotoWrapper,
  Photo,
  SmallText,
  MyName,
  MainTitle
}