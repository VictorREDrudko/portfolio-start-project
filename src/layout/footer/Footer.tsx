import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" justify="center" align="center">
        <Text>Государственный пограничный комитет Республики Беларусь</Text>
        <Text>ГУО "Институт пограничной службы Республики Беларусь"</Text>
        <Year>2024</Year>
        <Place>Минск</Place>
      </FlexWrapper>
    </StyledFooter>
  )
}

const StyledFooter = styled.section`
  background-color: red;
  min-height: 20vh;
`

const Text = styled.span`

`

const Year = styled.span`

`

const Place = styled.span`

`