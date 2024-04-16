import { SectionTitle } from "../../../components/SectionTitle"
import { MenuWorks, StatusType } from "./menuWorks/MenuWorks"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./work/Work"
import librariImg from "../../../assets/images/library.png"
import coffeeImg from "../../../assets/images/coffee.png"
import game1Img from "../../../assets/images/game1.png"
import game2Img from "../../../assets/images/hangman.png"
import { Container } from "../../../components/Container"
import React, { useState } from "react"
import { S } from "./Works_Styles"

const WorksData = [
  {
    src: librariImg,
    title: "Library",
    text: "My first project: a single-page application (SPA) for the Brooklyn Library! Created in 2023 while in The Rolling Scopes School (course «JavaScript/Front-end», stage 0)!",
    pathDemo: "https://VictorREDrudko.github.io/Library/index.html",
    pathCode: "https://github.com/VictorREDrudko/Library",
    type: "lp",
  },

  {
    src: coffeeImg,
    title: "Coffee house",
    text: "My second project: a single-page application (SPA) for the coffee house! Created in 2023 while in The Rolling Scopes School (course «JavaScript/Front-end», stage 1)!",
    pathDemo: "https://VictorREDrudko.github.io/coffee-house/index.html",
    pathCode: "https://github.com/VictorREDrudko/coffe-house",
    type: "lp",
  },

  {
    src: game1Img,
    title: "Collect the flags",
    text: "My first game: Selection of identical cards with country flags! Created in 2023 while in The Rolling Scopes School (course «JavaScript/Front-end», stage 0)!",
    pathDemo: "https://VictorREDrudko.github.io/random-game/index.html",
    pathCode: "https://github.com/VictorREDrudko/random-game/tree/gh-pages",
    type: "game",
  },

  {
    src: game2Img,
    title: "Hangman",
    text: "My second game: Guess the word! Created in 2023 while in The Rolling Scopes School (course «JavaScript/Front-end», stage 1)!",
    pathDemo: "https://VictorREDrudko.github.io/random-game/index.html",
    pathCode: "https://github.com/VictorREDrudko/hangman",
    type: "game",
  },
]

const worksItems: Array<{status: StatusType, title: string} > = [
  {
    title: "All",
    status: "all"
  },
  {
    title: "Landing page",
    status: "lp"
  },
  {
    title: "Game",
    status: "game"
  }
]

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = WorksData;

  if (currentFilterStatus === "lp") {
    filteredWorks = WorksData.filter(work => work.type === "lp");
  }

  if (currentFilterStatus === "game") {
    filteredWorks = WorksData.filter(work => work.type === "game");
  }

  // Функция сетает 
  function changeStatus (value: StatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <MenuWorks menuItems={worksItems} 
                  changeStatus={changeStatus}
                  currentFilterStatus={currentFilterStatus}/>
        <FlexWrapper justify={"space-between"} wrap="wrap" gaps="40px">
          {filteredWorks.map((w, index) => {
            return (
              <Work key={index}
                    src={w.src} 
                    title={w.title}
                    text={w.text}
                    pathDemo={w.pathDemo}
                    pathCode={w.pathCode}
              />
            )
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  )
}