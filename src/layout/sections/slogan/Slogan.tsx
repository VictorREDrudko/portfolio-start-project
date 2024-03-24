import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Button } from "../../../components/Button"

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>Enjoy every moment!!!</SectionTitle>
      <Button>Hire me</Button>
    </StyledSlogan>
  )
}

const StyledSlogan = styled.section`
  background-color: #5f3b3b;
  min-height: 20vh;
`