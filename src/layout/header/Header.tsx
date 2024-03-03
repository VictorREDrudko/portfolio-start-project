import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const items = ["Главная", "Информационные модули", "Полевые проекты", "Классификация материальных средств", "Инженерная техника"]

export const Header = () => {
  return (
  <StyledHeader>
    <Logo/>
    <Menu menuItems={items}/>
  </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`