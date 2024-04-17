import { Icon } from "../../../../components/icon/Icon"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { S } from "../Skills_Styles"
import { Fade } from "react-awesome-reveal";

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
        <Fade cascade damping={0.2}>
          <S.IconWrapper>
            <Icon iconId={props.iconId} viewBox={props.viewBox}></Icon>
          </S.IconWrapper>
          <S.Title>{props.title}</S.Title>
          <S.Text>{props.text}</S.Text>
        </Fade>
      </FlexWrapper>
    </S.Skill>
  )
}
