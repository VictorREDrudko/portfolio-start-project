import { Link } from "../../../../components/Link"
import { Button } from "../../../../components/Button"
import React from "react"
import { S } from "../Works_Styles"

type WorkPropsType = {
  src: string
  title: string
  text: string
  pathDemo: string
  pathCode: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.ContainerImg>
        <S.ImageWork src={props.src} alt="Image work"/>
        <Button>view project</Button>
      </S.ContainerImg>
      <S.Description>
        <S.TitleWork>{props.title}</S.TitleWork>
        <S.TextWork>{props.text}</S.TextWork>
        <Link href={props.pathDemo}>demo</Link>
        <Link href={props.pathCode}>code</Link>
      </S.Description>
    </S.Work>
  )
}