import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Theme } from "../../styles/Theme"

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Victor Rudzko</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"telegram"} viewBox="0 0 50 50" width="50px" height="50px"></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"instagram"} viewBox="0 0 50 50" width="50px" height="50px"></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"whatsapp"} viewBox="-3 0 50 50" width="50px" height="48px"></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"linked"} viewBox="0 0 50 50" width="50px" height="50px"></Icon>
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>@ 2024 Victor Rudzko, All Rights Reserved</Copyright>
      </FlexWrapper>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
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
  /* transform: rotate(-90deg); */
`

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  color: ${Theme.colors.noAccent};
`