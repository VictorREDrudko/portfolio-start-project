import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Theme } from "../../../styles/Theme"
import React from "react"

export const Slogan: React.FC = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction="column" align="center">
          <SectionTitle>Enjoy every moment!!!</SectionTitle>
          <Button>Hire me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  )
}

const StyledSlogan = styled.section`

  ${Button} {
    background-color: ${Theme.colors.noAccent};
    color: ${Theme.colors.mainBg};
    border-radius: 15px;
    transition: all 0.5s;

    &:hover {
      background-color: ${Theme.colors.font};
    }
  }
`