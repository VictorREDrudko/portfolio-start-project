import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Logo = () => {
  return (
    <StyledLogo href="#">
      <Icon path={"https://2sticker.ru/wa-data/public/shop/products/79/31/3179/images/27633/27633.750.png"} alternativeText={"Инженерная иконка"}/>
    </StyledLogo>
  );
}

const StyledLogo = styled.a`
  img {
    width: 80px;
  }
`