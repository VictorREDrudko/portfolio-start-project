import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { YandexMap } from "../../../components/yandexmap/YandexMap"
import { Contact } from "./contact/Contact"
import { Container } from "../../../components/Container"

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contacts</SectionTitle>
      <Container>
        <FlexWrapper justify="space-around" gaps="40px" wrap="wrap">
          <Contact/>
          <YandexMap/>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  min-height: 70vh;
  ${FlexWrapper} {
    width: 100%;
  }
`