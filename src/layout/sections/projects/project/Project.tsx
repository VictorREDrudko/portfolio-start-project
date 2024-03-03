import styled from "styled-components";

type projectPropsType = {
  title: string
  text: string
  src: string
  alt: string
}

export const Project = (props: projectPropsType) => {
  return (
    <StyledProject>
      <StyledImageProgect src={props.src} alt={props.alt}/>
      <TitleProject>{props.title}</TitleProject>
      <TextProject>{props.text}</TextProject>
      <LinkProject href={"#"}>Открыть проект</LinkProject>
    </StyledProject>
  )
}

const StyledProject = styled.div`
  background-color: greenyellow;
  width: 40%;
`

const StyledImageProgect = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

const TitleProject = styled.h3`

`

const TextProject = styled.p`

`

const LinkProject = styled.a`

`