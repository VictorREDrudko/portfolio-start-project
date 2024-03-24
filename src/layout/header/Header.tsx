import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import Ico from "../../assets/images/html.svg"

const items = ["About me", "Skills", "Works", "Testymony", "Contact"]

export const Header = () => {
  return (
    <StyledHeader>
      {/* <img src={Ico} alt="dsdghfvhl" /> */}
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