import styled from "styled-components"
import { Icon } from "../icon/Icon"
import { FlexWrapper } from "../FlexWrapper"

export const Slider = () => {
  return (
    <StyledSlider>
      <Slide>
        <FlexWrapper direction="column" align="center">
          <Icon iconId={"academy"} viewBox="0 50 1900 1929" width="150px" height="100px"/>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestias dignissimos adipisci.</Text>
          <Name>Military Academy of the Republic of Belarus</Name>
        </FlexWrapper>
        <Pagination>
          <span></span>
          <span></span>
          <span></span>
        </Pagination>
      </Slide>
    </StyledSlider>
  )
}

const StyledSlider = styled.div`
  background-color: #c3f8b3;
  max-width: 500px;
`

const Slide = styled.div`
  border: 1px solid red;
  text-align: center;
`

const Text = styled.p`

`

const Name = styled.p`

`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: #3b8bfa;
    margin: 5px;
  }
`