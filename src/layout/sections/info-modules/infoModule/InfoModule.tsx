import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type InfoModulePropsType = {
  title: string
  description: string
  IconPath: string
  IconAlt: string
}

export const InfoModule = (props: InfoModulePropsType) => {
  return (
    <StyledInfoModule>
      <Icon path={props.IconPath} alternativeText={props.IconAlt}/>
      <StyledTitleInfoModule>{props.title}</StyledTitleInfoModule>
      <StyledTextInfoModule>{props.description}</StyledTextInfoModule>
    </StyledInfoModule>
  );
}

const StyledInfoModule = styled.div`
  width: 22%;
  background-color: green;
  margin: 10px;
`

const StyledTitleInfoModule = styled.h3`
  // text-align: center;
`

const StyledTextInfoModule = styled.p`
  // text-align: center;
`