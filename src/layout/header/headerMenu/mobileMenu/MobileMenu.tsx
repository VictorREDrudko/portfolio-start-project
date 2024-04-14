import React, { useState } from "react"
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
  // Динамическое открытие и закрытие меню Бургер
  const [menuIsOpen, setmenuIsopen] = useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsopen(!menuIsOpen);
  }

  return (
  <S.MobileMenu>
    <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
      <span></span>
    </S.BurgerButton>
    <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {setmenuIsopen(false)}}>
      <Menu menuItems={props.menuItems}/>
    </S.MobileMenuPopup>
  </S.MobileMenu>
  )
}