import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Victor Rudzko</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"telegram"} width="61px" height="61px" viewBox="0 0 2000 2829"></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"instagram"} width="61px" height="61px" viewBox="0 0 2000 2829"></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"whatsapp"} width="61px" height="61px" viewBox="0 0 2000 2829"></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"viber"} width="61px" height="61px" viewBox="0 0 2000 2829"></Icon>
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>@ 2024 Victor Rudzko, All Rights Reserved</Copyright>
      </FlexWrapper>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  
`

const Name = styled.span`
  
`

const SocialList = styled.ul`
  display: flex;
  gap: 45px;
`

const SocialItem = styled.li`
  
`

const SocialLink = styled.a`
  
`

const Copyright = styled.small`
  
`