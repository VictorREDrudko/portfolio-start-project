import styled from "styled-components"

export const Menu = () => {
  return (
  <StyledMenu>
    <ul>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Skills</a>
      </li>
      <li>
        <a>Works</a>
      </li>
      <li>
        <a>Testymony</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </ul>
  </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 40px;
  }

`