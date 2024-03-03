import React from "react";
import styled from "styled-components";
import emblem from "./../../../assets/emblem.png"
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify={"space-around"} align={"center"}>
        <div>
          <h2>Электронный справочник</h2>
          <h1>инженера</h1>
          <p>органов пограничной службы</p>
        </div>
        <StyledEmblem src={ emblem } alt="инженеры"/>
      </FlexWrapper>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: green;
`

const StyledEmblem = styled.img`
  width: 400px;
`