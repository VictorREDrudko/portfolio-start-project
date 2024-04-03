import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { MenuWorks } from "./menuWorks/MenuWorks"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./work/Work"
import librariImg from "../../../assets/images/library.png"
import coffeeImg from "../../../assets/images/coffee.png"
import game1Img from "../../../assets/images/game1.png"
import game2Img from "../../../assets/images/hangman.png"
import { Container } from "../../../components/Container"


const worksItems = ["All", "SPA", "Game", "React"]

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <MenuWorks menuItems={worksItems}/>
        <FlexWrapper justify={"space-between"} wrap="wrap" gaps="40px">
          <Work src={librariImg}
                title={"Library"}
                text={"My first project: a single-page application (SPA) for the Brooklyn Library! Created in 2023 while in The Rolling Scopes School (course «JavaScript/Front-end», stage 0)!"}
                pathDemo={"https://VictorREDrudko.github.io/Library/index.html"}
                pathCode={"https://github.com/VictorREDrudko/Library"}/>
          <Work src={coffeeImg}
                title={"Hangman"}
                text={"My second project: a single-page application (SPA) for the coffee house! Created in 2023 while in The Rolling Scopes School (course «JavaScript/Front-end», stage 1)!"}
                pathDemo={"https://VictorREDrudko.github.io/coffee-house/index.html"}
                pathCode={"https://github.com/VictorREDrudko/coffe-house"}/>
          <Work src={game1Img}
                title={"Collect the flags"}
                text={"My first game: Selection of identical cards with country flags! Created in 2023 while in The Rolling Scopes School (course «JavaScript/Front-end», stage 0)!"}
                pathDemo={"https://VictorREDrudko.github.io/random-game/index.html"}
                pathCode={"https://github.com/VictorREDrudko/random-game/tree/gh-pages"}/>
          <Work src={game2Img}
                title={"Hangman"}
                text={"My second game: Guess the word! Created in 2023 while in The Rolling Scopes School (course «JavaScript/Front-end», stage 1)!"}
                pathDemo={"https://VictorREDrudko.github.io/random-game/index.html"}
                pathCode={"https://github.com/VictorREDrudko/hangman"}/>
        </FlexWrapper>
      </Container>
    </StyledWorks>
  )
}

const StyledWorks = styled.section`

`