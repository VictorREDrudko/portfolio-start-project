import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

// from Skills
const Skills = styled.section`
`

// from Skill
const Skill = styled.div`
  background-color: ${Theme.colors.mainBg};
  max-width: 330px;
  padding: 50px 20px 20px 20px;
  border: 1px solid ${Theme.colors.font};
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  @media ${Theme.media.desktopMini} {
    max-width: 300px;
  }
`

const Title = styled.h3`
  margin: 50px 0 20px 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const Text = styled.p`
  text-align: center;
`

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    height: 80px;
    width: 80px;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: rgba(1, 253, 5, 0.2);
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: top left;
  }
`

export const S = {
  Skills,
  Skill,
  Title,
  Text,
  IconWrapper,
}