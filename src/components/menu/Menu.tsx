import React from "react";
import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="#">Оборудование</a>
        </li>
        <li>
          <a href="#">Полевые проекты</a>
        </li>
        <li>
          <a href="#">Классификация материальных средств</a>
        </li>
        <li>
          <a href="#">Инженерная техника</a>
        </li>
      </ul>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 40px;
  }
`