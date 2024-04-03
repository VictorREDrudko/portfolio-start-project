import styled from "styled-components"
import { Link } from "../../../../components/Link"

export const MenuWorks = (props: {menuItems: Array<string>}) => {
  return (
  <StyledMenuWorks>
    <ul>
      {props.menuItems.map((element: string, index: number) => {
        return (
          <ListWorks key={index}>
            <Link href="#">{element}</Link>
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
  }
`

const ListWorks = styled.li`
  transform: scale(1);
  transition: 0.5s all;

  &:hover {
    transform: scale(1.2);
  }
`



