import styled from "styled-components"
import { Link } from "../../../../components/Link"
import { Theme } from "../../../../styles/Theme"
import { Button } from "../../../../components/Button"

type WorkPropsType = {
  src: string
  title: string
  text: string
  pathDemo: string
  pathCode: string
}

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ContainerImg>
        <ImageWork src={props.src} alt="Image work"/>
        <Button>view project</Button>
      </ContainerImg>
      <Description>
        <TitleWork>{props.title}</TitleWork>
        <TextWork>{props.text}</TextWork>
        <Link href={props.pathDemo}>demo</Link>
        <Link href={props.pathCode}>code</Link>
      </Description>
    </StyledWork>
  )
}

const StyledWork = styled.div`
  background-color: ${Theme.colors.secondBg};
  max-width: 540px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 10px rgba(0, 0, 0, 0.3);

  ${Link} {
    padding: 0;

    &::before {
    top: 20px;
    }

    & + ${Link} {
      margin-left: 20px;
    }
  }
`

const ContainerImg = styled.div`
  position: relative;
  border-radius: 20px;
  height: 240px;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
      border-radius: 15px 15px 0 0;
    }

    ${Button} {
      opacity: 1;
      transition: all 0.5s;
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${Theme.colors.font};
    color: ${Theme.colors.mainBg};
    transition: all 0.5s;
    font-weight: 700;
    border-radius: 15px;
    }

`

const ImageWork = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
`

const TitleWork = styled.h3`
  
`
const TextWork = styled.p`
  margin: 14px 0 10px 0;
`

const Description = styled.div`
  padding: 25px 20px;
`
