import MyPhoto from "../../../assets/my-photo-1x.png"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import React from "react"
import { S } from "./About_Styles"

export const About: React.FC = () => {
  return (
    <S.About>
      <Container>
        <FlexWrapper justify="space-around" align="center" gaps="20px" wrap="wrap">
          <S.TextWrapper>
            <S.SmallText>Hi There</S.SmallText>
            <S.MyName>I am Victar Rudzko</S.MyName>
            <S.MainTitle>A Web Developer.</S.MainTitle>
          </S.TextWrapper>
          <S.MyPhotoWrapper>
            <S.Photo src={MyPhoto} alt="My photo" />
          </S.MyPhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.About>
  )
}
