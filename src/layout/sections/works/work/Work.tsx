import styled from "styled-components"

type WorkPropsType = {
  src: string
  title: string
  text: string
}

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImageWork src={props.src} alt="Image work"/>
      <TitleWork>{props.title}</TitleWork>
      <TextWork>{props.text}</TextWork>
      <Link href="#">demo</Link>
      <Link href="#">code</Link>
    </StyledWork>
  )
}

const StyledWork = styled.div`
  background-color: yellowgreen;
  max-width: 540px;
  width: 100%
`

const ImageWork = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`

const TitleWork = styled.h3`
  
`
const TextWork = styled.p`
  
`

const Link = styled.a`
  
`
