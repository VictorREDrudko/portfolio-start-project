import React from "react"
import { S } from "../HeaderMenu_Styles"

export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
  return (
    <ul>
      {props.menuItems.map((element: string, index: number) => {
        return (
          <S.MenuItem key={index}>
            <S.LinkHeader href="#">{element}</S.LinkHeader>
          </S.MenuItem>
        )
      })}
  </ul>
  )
}