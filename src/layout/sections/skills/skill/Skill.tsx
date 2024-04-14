import { Icon } from "../../../../components/icon/Icon"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { S } from "../Skills_Styles"

type SkillPropsType = {
  iconId: string
  viewBox?: string
  title: string
  text: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper direction="column" align="center">
        <S.IconWrapper>
          <Icon iconId={props.iconId} viewBox={props.viewBox}></Icon>
        </S.IconWrapper>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
      </FlexWrapper>
    </S.Skill>
  )
}
