import styled from "styled-components"
import { Theme } from "../../styles/Theme"

const Slider = styled.div`
  background-color: ${Theme.colors.secondBg};
  max-width: 450px;
`

const Slide = styled.div`
  margin: 0 10px;
  text-align: center;
`

const Text = styled.p`
  margin: 40px 20px 30px 20px;
`

const Name = styled.h3`
  font-weight: 400;
  margin-bottom: 20px;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${Theme.colors.mainBg};
    border-radius: 50%;
    cursor: pointer;

    & + span {
      margin-left: 5px;
    }

    &.active {
      background-color: ${Theme.colors.font};
      width: 20px;
      border-radius: 5px;
    }
  }
`

export const S = {
  Slider,
  Slide,
  Text,
  Name,
  Pagination
}