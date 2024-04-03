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
        <FlexWrapper justify="space-around">
          <Contact/>
          <YandexMap/>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #f76ed0;
`