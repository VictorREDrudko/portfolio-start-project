import styled from "styled-components"
import { Theme } from "../../styles/Theme"

const Footer = styled.footer`
  background-color: ${Theme.colors.mainBg};
  padding: 30px 0;
`

const Name = styled.span`
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 3px;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 20px 0;

  @media ${Theme.media.mobile} {
    gap: 10px;
  }
`

const SocialItem = styled.li`
  
`

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 61px;
  height: 61px;
  background-color: ${Theme.colors.secondBg};
  border-radius: 50%;
`

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  color: ${Theme.colors.noAccent};
`

export const S = {
  Footer,
  Name,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright
}