import styled from "styled-components"
import { Link } from "../../../../components/Link"
import { Theme } from "../../../../styles/Theme"

export const MenuWorks = (props: {menuItems: Array<{status: "all" | "game" | "spa", title: string} >}) => {
  return (
  <StyledMenuWorks>
    <ul>
      {props.menuItems.map((element, index) => {
        return (
          <ListWorks key={index}>
            <Link href="#">{element.status}</Link>
          </ListWorks>
        )
      })}
    </ul>
  </StyledMenuWorks>
  )
}

const StyledMenuWorks = styled.nav`
  margin-bottom: 40px;
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;

    @media ${Theme.media.mobile} {
      gap: 10px;
    }
  }
`

const ListWorks = styled.li`
  transform: scale(1);
  transition: 0.5s all;

  &:hover {
    transform: scale(1.2);
  }
`



