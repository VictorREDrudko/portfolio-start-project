import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Link } from "../../../components/Link";

// from Works
const Works = styled.section`
  position: relative;
  
  @media ${Theme.media.desktopMini} {
    ${FlexWrapper} {
      justify-content: center;
    }
  }
`

// from Work
const Work = styled.div`
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

  @media ${Theme.media.desktopMini} {
    max-width: 450px;
  }

  @media ${Theme.media.desktopMini1} {
    max-width: 680px;
  }

  @media ${Theme.media.desktopMini1} {
    max-width: 540px;
  }
`

const ContainerImg = styled.div`
  position: relative;
  border-radius: 20px;
  height: 240px;

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
    transition: all 0.5s;
  }

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
      opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transition: all 0.5s;
      background-color: ${Theme.colors.noAccent};
      &:hover {
        background-color: ${Theme.colors.font};
      }
    }
  }

  @media ${Theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transition: all 0.5s;
    }
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

// From Menu Work
const MenuWorks = styled.nav`
  margin-bottom: 40px;
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;

    @media ${Theme.media.mobile} {
      gap: 10px;
    }
  }

  button {
    width: 100%;
  }
`

const ListWorks = styled.li`
  transform: scale(1);
  transition: 0.5s all;
`

export const S = {
  Works,
  Work,
  ContainerImg,
  ImageWork,
  TitleWork,
  TextWork,
  Description,
  MenuWorks,
  ListWorks,
}