import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"

const items = ["About me", "Skills", "Works", "Testymony", "Contact"]

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Menu menuItems={items}/>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #282C33;
  color: #6dfe76;
  display: flex;
  justify-content: space-between;
`