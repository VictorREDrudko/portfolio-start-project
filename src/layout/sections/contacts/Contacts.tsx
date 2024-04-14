import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { YandexMap } from "../../../components/yandexmap/YandexMap"
import { Contact } from "./contact/Contact"
import { Container } from "../../../components/Container"
import { S } from "./Contacts_Style"
import React from "react"

export const Contacts: React.FC = () => {
  return (
    <S.Contacts>
      <SectionTitle>Contacts</SectionTitle>
      <Container>
        <FlexWrapper justify="space-around" gaps="40px" wrap="wrap">
          <Contact/>
          <YandexMap/>
        </FlexWrapper>
      </Container>
    </S.Contacts>
  )
}