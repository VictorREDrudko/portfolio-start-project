import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"


export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My skills</SectionTitle>
      <FlexWrapper wrap="wrap" justify="space-between">
        <Skill  iconId="htmlSvg" 
                viewBox="74.634 0 362.733 512" 
                title="HTML5"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur minima esse?"/>
        <Skill  iconId="cssSvg" 
                viewBox="-0.1 0 1199.3 1692.8" 
                title="CSS3"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit?"/>
        <Skill  iconId="cssSvg" 
                viewBox="-0.1 0 1199.3 1692.8" 
                title="JavaScript"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit?Lorem ipsum dolor sit amet consectetur adipisicing elit?"/>
        <Skill  iconId="htmlSvg" 
                viewBox="74.634 0 362.733 512" 
                title="TypeScript"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur minima esse?"/>
        <Skill  iconId="cssSvg" 
                viewBox="-0.1 0 1199.3 1692.8" 
                title="Styled components"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit?"/>
        <Skill  iconId="cssSvg" 
                viewBox="-0.1 0 1199.3 1692.8" 
                title="React"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit?Lorem ipsum dolor sit amet consectetur adipisicing elit?"/>
      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: #47b8f0;
`