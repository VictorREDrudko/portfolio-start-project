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
    <StyledScill>
      <Icon iconId={props.iconId} viewBox={props.viewBox}></Icon>
      <Skilltitle>{props.title}</Skilltitle>
      <SkillText>{props.text}</SkillText>
    </StyledScill>

  )
}

const StyledScill = styled.div`
  width: 30%;
  background-color: #2c6b8d;
  margin: 10px;
`

const Skilltitle = styled.h2`

`

const SkillText = styled.p`

`
