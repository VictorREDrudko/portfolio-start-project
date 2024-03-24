import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Menu } from "../../../components/menu/Menu"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./work/Work"
import spaImage from "../../../assets/images/Single-Page-Application.png"


const worksItems = ["All", "SPA", "Game", "React"]

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My works</SectionTitle>
      <Menu menuItems={worksItems}/>
      <FlexWrapper justify={"space-around"}>
        <Work src={spaImage}
              title={"Cofee House"}
              text={"Lorem dfhdfkj hgjdjf; jhdgdkgjk nfs  jkfs fsn fnsnfkj sjfsa  nosgmg kowegg'sagg d;ogg ak;gg g"}/>
        <Work src={spaImage}
              title={"Hangman"}
              text={"Lorem fnsnfkj sjfsa  nosgmg kowegg'sagg d;ogg ak;gg g"}/>
      </FlexWrapper>
    </StyledWorks>
  )
}

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: yellow;
`