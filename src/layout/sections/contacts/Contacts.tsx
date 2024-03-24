import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { YandexMap } from "../../../components/yandexmap/YandexMap"
import { Contact } from "./contact/Contact"

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contacts</SectionTitle>
      <FlexWrapper justify="space-around">
        <Contact/>
        <YandexMap/>
      </FlexWrapper>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #f76ed0;
`