import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Container } from "../../components/Container"
import { FlexWrapper } from "../../components/FlexWrapper"
import { HeaderMenu } from "./headerMenu/HeaderMenu"
import { Theme } from "../../styles/Theme"
import { MobileMenu } from "./mobileMenu/MobileMenu"

const items = ["About me", "Skills", "Works", "Education", "Contacts"]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo/>
          <HeaderMenu menuItems={items}/>
          <MobileMenu menuItems={items}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: ${Theme.colors.mainBg};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  padding: 10px 0;

  @media ${Theme.media.mobile} {
    padding: 5px 0;
    }
`