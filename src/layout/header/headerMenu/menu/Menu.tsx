import React from "react"
import { S } from "../HeaderMenu_Styles"

const items = [
  {
    title: "About me",
    href: "about",
  },

  {
    title: "Skills",
    href: "skills",
  },

  {
    title: "Works",
    href: "works",
  },

  {
    title: "Education",
    href: "education",
  },
  
  {
    title: "Contacts",
    href: "contacts",
  },
]

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((element, index: number) => {
        return (
          <S.MenuItem key={index}>
            <S.LinkHeader activeClass="active" 
                          to={element.href} 
                          smooth={true} 
                          spy={true}
                          offset={-100}
            >{element.title}</S.LinkHeader>
          </S.MenuItem>
        )
      })}
  </ul>
  )
}