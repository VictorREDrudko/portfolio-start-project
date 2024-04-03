import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"
import { Theme } from "../../../../styles/Theme"
import { FlexWrapper } from "../../../../components/FlexWrapper"

type SkillPropsType = {
  iconId: string
  viewBox?: string
  title: string
  text: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction="column" align="center">
        <IconWrapper>
          <Icon iconId={props.iconId} viewBox={props.viewBox}></Icon>
        </IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.text}</SkillText>
      </FlexWrapper>
    </StyledSkill>

  )
}

const StyledSkill = styled.div`
  background-color: ${Theme.colors.mainBg};
  width: 330px;
  padding: 50px 20px 20px 20px;
  border: 1px solid ${Theme.colors.font};
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`

const SkillTitle = styled.h3`
  margin: 50px 0 20px 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const SkillText = styled.p`
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