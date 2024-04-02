import styled from "styled-components"

type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  gaps?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  gap: ${props => props.gaps || "0px"};
  height: 100%;
`