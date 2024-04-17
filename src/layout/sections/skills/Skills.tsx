import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"
import { Container } from "../../../components/Container"
import { S } from "./Skills_Styles"

const skillData = [
  {
    iconId: "html",
    viewBox: "0 0 2000 2829",
    title: "HTML5",
    text: "Sources: IT-INCUBATOR, The Rolling Scopes Scool (stage 0, 1), Mmdn (Resources for Developers) and some courses on YouTube"
  },

  {
    iconId: "css",
    viewBox: "0 0 2000 2829",
    title: "CSS3",
    text: "Sources: IT-INCUBATOR, The Rolling Scopes Scool (stage 0, 1), Mmdn (Resources for Developers) and some courses on YouTube"
  },

  {
    iconId: "js",
    viewBox: "0 0 2000 2829",
    title: "JavaScript",
    text: "Sources: IT-INCUBATOR, The Rolling Scopes Scool (stage 0, 1), Mmdn (Resources for Developers), Harvard CS50 course, Complete JavaScript Course on Udemy and some courses on YouTube"
  },

  {
    iconId: "git",
    viewBox: "0 0 256 256",
    title: "Git & GitHub",
    text: "Sources: IT-INCUBATOR, The Rolling Scopes Scool (stage 0, 1), git-scm (documentation) and some courses on YouTube"
  },

  {
    iconId: "ts",
    viewBox: "0 0 2000 2829",
    title: "TypeScript",
    text: "Sources: IT-INCUBATOR and some courses on YouTube"
  },

  {
    iconId: "styled",
    viewBox: "0 0 24 24",
    title: "Styled components",
    text: "Sources: IT-INCUBATOR and some courses on YouTube"
  },

  {
    iconId: "react",
    viewBox: "0 0 26 26",
    title: "React",
    text: "Sources: IT-INCUBATOR, Complete React Course on Udemy and some courses on YouTube"
  },

  {
    iconId: "figma",
    viewBox: "0 0 2000 2829",
    title: "Figma",
    text: "Sources: IT-INCUBATOR, The Rolling Scopes Scool (stage 0, 1) and some courses on YouTube"
  },

  {
    iconId: "dom",
    viewBox: "0 0 2000 2829",
    title: "Document Object Model",
    text: "Sources: IT-INCUBATOR, The Rolling Scopes Scool (stage 0, 1) and some courses on YouTube"
  },
]

export const Skills = () => {
  return (
    <S.Skills id="skills">
      <Container>
        <SectionTitle>My skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-around" gaps="30px">

          {skillData.map((s, index) => {
            return <Skill iconId={s.iconId} key={index}
                          viewBox={s.viewBox}
                          title={s.title}
                          text={s.text}/>
          })}

        </FlexWrapper>
      </Container>
    </S.Skills>
  )
}