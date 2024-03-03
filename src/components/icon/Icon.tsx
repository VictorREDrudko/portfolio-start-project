import React from "react";
import styled from "styled-components";

type IconPropsType = {
  path: string
  alternativeText: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <StyledIcon src={`${props.path}`} alt={`${props.alternativeText}`} />
  );
}

const StyledIcon = styled.img`
  width: 80px;
  height: 80px;
`