import React from "react"
import { Icon } from "../icon/Icon"
import { animateScroll as scroll} from "react-scroll"
import styled from "styled-components"

export const Logo: React.FC = () => {
  return (
    <LogoLink onClick={() => {scroll.scrollToTop()}}>
      <Icon iconId={'RV'} width="56px" height="40px" viewBox="0 0 56px 40px"/>
    </LogoLink>
  )
}

const LogoLink = styled.a`
  cursor: pointer;
`