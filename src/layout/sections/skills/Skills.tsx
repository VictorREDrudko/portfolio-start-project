import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"


export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My skills</SectionTitle>
      <FlexWrapper wrap="wrap" justify="space-between">
        <Skill  iconId="html" 
                viewBox="0 0 2000 2829"
                title="HTML5"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur minima esse?"/>
        <Skill  iconId="css" 
                viewBox="0 0 2000 2829"
                title="CSS3"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit?"/>
        <Skill  iconId="js" 
                viewBox="0 0 2000 2829"
                title="JavaScript"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit?Lorem ipsum dolor sit amet consectetur adipisicing elit?"/>
        <Skill  iconId="git" 
                viewBox="0 0 256 256" 
                title="Git & GitHub"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur minima esse?"/>
        <Skill  iconId="ts" 
                viewBox="0 0 2000 2829"
                title="TypeScript"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur minima esse?"/>
        <Skill  iconId="styled"
                viewBox="0 0 24 24" 
                title="Styled components"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit?"/>
        <Skill  iconId="react" 
                viewBox="0 0 26 26" 
                title="React"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit?Lorem ipsum dolor sit amet consectetur adipisicing elit?"/>
        <Skill  iconId="figma"
                viewBox="0 0 2000 2829"
                title="Figma"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit?Lorem ipsum dolor sit amet consectetur adipisicing elit?"/>
        <Skill  iconId="dom"
                viewBox="0 0 2000 2829"
                title="Document Object Model"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit?Lorem ipsum dolor sit amet consectetur adipisicing elit?"/>
      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: #47b8f0;
`