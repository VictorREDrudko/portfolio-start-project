import styled from "styled-components"
import MyPhoto from "../../../assets/my-photo.png"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import { Theme } from "../../../styles/Theme"

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper justify="space-around" align="center">
          <div>
            <SmallText>Hi There</SmallText>
            <MyName>I am Victar Rudzko</MyName>
            <MainTitle>A Web Developer.</MainTitle>
          </div>
          <MyPhotoWrapper>
            <Photo src={MyPhoto} alt="My photo" />
          </MyPhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  min-height: 100vh;
  display: flex;
`

const MyPhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 435px;
    height: 400px;
    border: 1px solid ${Theme.colors.font};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    border-radius: 15px;
  }
`

const Photo = styled.img`
  width: 430px;
  z-index: 1;
  box-shadow: 2px 2px 24px 24px rgba(28, 26, 26, 0.6);
  border-radius: 20px;
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const MyName = styled.h2`
  font-size: 50px;
  font-weight: 700;
  margin: 10px 0;
`

const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`
