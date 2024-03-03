import React from "react";
import styled from "styled-components";

export const Logo = () => {
  return (
    <StyledLogo href="#">
      <img src="https://2sticker.ru/wa-data/public/shop/products/79/31/3179/images/27633/27633.750.png" alt="icon-engineer" />
    </StyledLogo>
  );
}

const StyledLogo = styled.a`
  img {
    width: 80px;
  }
`