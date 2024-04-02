import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"

type SkillPropsType = {
  iconId: string
  viewBox?: string
  title: string
  text: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} viewBox={props.viewBox}></Icon>
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.text}</SkillText>
    </StyledSkill>

  )
}

const StyledSkill = styled.div`
  width: 30%;
  background-color: #2c6b8d;
  margin: 10px;
`

const SkillTitle = styled.h2`

`

const SkillText = styled.p`

`
