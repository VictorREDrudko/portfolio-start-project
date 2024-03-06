import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
  return (
    <StyledSlider>
      <Slide>
        <SlideImg src="https://vgr.by/wp-content/uploads/2020/12/granica.jpg" alt={"полоса крепления"}/>
        <SlideName>Полоса крепления погз 'Бигосово' Полоцкого пого</SlideName>
        <SlideText>Капитальный ремонт в 2024 году, общая протяженность составляет 32 км, ширина 5 м</SlideText>
      </Slide>
    </StyledSlider>
  )
}

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 700px;
`

const Slide = styled.div`
  text-align: center;
`


const SlideImg = styled.img`
  width: 100%;
`

const SlideName = styled.h4`

`

const SlideText = styled.p`

`
