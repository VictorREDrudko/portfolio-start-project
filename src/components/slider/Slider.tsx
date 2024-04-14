import { Icon } from "../icon/Icon"
import { FlexWrapper } from "../FlexWrapper"
import { S } from "./Slider_Styles"
import React from "react"

export const Slider: React.FC = () => {
  return (
    <S.Slider>
      <S.Slide>
        <FlexWrapper direction="column" align="center">
          <Icon iconId={"academy"} viewBox="0 50 1900 1929" width="150px" height="100px"/>
          <S.Text>Study time 2002-2006! Specialty: military engineer (diploma with honors)! 2012-2014 advanced training (specialist of the highest category)!</S.Text>
          <S.Name>Military Academy of the Republic of Belarus</S.Name>
        </FlexWrapper>
        <S.Pagination>
          <span></span>
          <span className={"active"}></span>
          <span></span>
        </S.Pagination>
      </S.Slide>
    </S.Slider>
  )
}