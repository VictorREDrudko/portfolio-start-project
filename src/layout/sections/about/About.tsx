import styled from "styled-components"
import MyPhoto from "../../../assets/photo.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper"

export const About = () => {
  return (
    <StyledAbout>
      <FlexWrapper justify="space-around" align="center">
        <div>
          <span>Hi There</span>
          <h2>I am Victar Rudzko</h2>
          <h1>A Web Developer.</h1>
        </div>
        <Photo src={MyPhoto} alt="My photo" />
      </FlexWrapper>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  background-color: #282C33;
  color: #6dfe76;
  min-height: 100vh;
`

const Photo = styled.img`
  height: 400px;
  width: 400px;
  border-radius: 50%;
  border: 10px solid #6dfe76;;
  object-fit: cover;
`