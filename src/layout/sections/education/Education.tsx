import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Slider } from "../../../components/slider/Slider"
import { FlexWrapper } from "../../../components/FlexWrapper"
import React from "react"

export const Education: React.FC = () => {
  return (
    <StyledEducation>
      <FlexWrapper justify="space-between" align="center" direction="column">
        <SectionTitle>Education</SectionTitle>
        <Slider/>
      </FlexWrapper>
    </StyledEducation>
  )
}

const StyledEducation = styled.section`
  position: relative;
`