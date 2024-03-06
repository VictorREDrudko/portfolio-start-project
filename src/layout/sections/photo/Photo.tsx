import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Photo = () => {
  return (
    <StyledPhoto>
      <TitleSection>Фотографии оборудованных объектов</TitleSection>
      <FlexWrapper justify="center" align="center">
        <Slider/>
      </FlexWrapper>
    </StyledPhoto>
  )
}

const StyledPhoto = styled.section`
  background-color: yellowgreen;
  min-height: 100vh;
`
