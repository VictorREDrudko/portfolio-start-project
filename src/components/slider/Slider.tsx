import styled from "styled-components"
import { Icon } from "../icon/Icon"
import { FlexWrapper } from "../FlexWrapper"
import { Theme } from "../../styles/Theme"

export const Slider = () => {
  return (
    <StyledSlider>
      <Slide>
        <FlexWrapper direction="column" align="center">
          <Icon iconId={"academy"} viewBox="0 50 1900 1929" width="150px" height="100px"/>
          <Text>Study time 2002-2006! Specialty: military engineer (diploma with honors)! 2012-2014 advanced training (specialist of the highest category)!</Text>
          <Name>Military Academy of the Republic of Belarus</Name>
        </FlexWrapper>
        <Pagination>
          <span></span>
          <span className={"active"}></span>
          <span></span>
        </Pagination>
      </Slide>
    </StyledSlider>
  )
}

const StyledSlider = styled.div`
  background-color: ${Theme.colors.secondBg};
  max-width: 450px;
`

const Slide = styled.div`
  /* border: 1px solid red; */
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