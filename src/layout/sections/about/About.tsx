import styled from "styled-components"
import MyPhoto from "../../../assets/my-photo.png"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import { Theme } from "../../../styles/Theme"

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper justify="space-around" align="center" gaps="20px" wrap="wrap">
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
    width: 100%;
    height: 100%;
    border: 1px solid ${Theme.colors.font};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    border-radius: 25px;
  }
`

const Photo = styled.img`
  max-width: 630px;
  width: 100%;
  height: auto;
  z-index: 1;
  box-shadow: 2px 2px 24px 24px rgba(28, 26, 26, 0.6);
  border-radius: 25px;
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${Theme.colors.textColor};
`

const MyName = styled.h2`
  font-size: 50px;
  font-weight: 700;
  margin: 10px 0;
`

const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
  color: ${Theme.colors.textColor};
`
