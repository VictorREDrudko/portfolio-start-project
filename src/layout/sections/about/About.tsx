import MyPhoto from "../../../assets/my-photo-1x.png"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import React from "react"
import { S } from "./About_Styles"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const About: React.FC = () => {
  return (
    <S.About id="about">
      <Container>
        <FlexWrapper justify="space-around" align="center" gaps="20px" wrap="wrap">
          <S.TextWrapper>
            <S.SmallText>Hi There</S.SmallText>
            <S.MyName>I am Victar Rudzko</S.MyName>
            <S.MainTitle>
              <p>A Web Developer</p>
            <Typewriter options={{
                        strings: ['A Web Developer.', 'A Frontend Developer.'],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                      }}/>
            </S.MainTitle>
          </S.TextWrapper>
          <Tilt className="parallax-effect-img"
                tiltMaxAngleX={40}
                tiltMaxAngleY={40}
                perspective={800}
                transitionSpeed={1500}
                scale={1.1}
                gyroscope={true}>
            <S.MyPhotoWrapper>
              <S.Photo src={MyPhoto} alt="My photo" />
            </S.MyPhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.About>
  )
}
