import { Link } from "../../../../components/Link"
import { S } from "../Works_Styles"

export type StatusType = "all" | "game" | "lp"

type MenuWorksPropsType = {
  menuItems: Array<{status: StatusType, title: string}>,
  changeStatus: (value: StatusType) => void,
  currentFilterStatus: string,
}

export const MenuWorks = (props: MenuWorksPropsType) => {
  return (
  <S.MenuWorks>
    <ul>
      {props.menuItems.map((element, index) => {
        return (
          <S.ListWorks key={index}>
            <Link active={props.currentFilterStatus === element.status} as={"button"} onClick={() => {props.changeStatus(element.status)}}>{element.title}</Link>
          </S.ListWorks>
        )
      })}
    </ul>
  </S.MenuWorks>
  )
}