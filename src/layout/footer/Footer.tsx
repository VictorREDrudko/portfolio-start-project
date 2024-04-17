import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"
import { S } from "./Footer_Styles"
import React from "react"

const SocialData = [
  {
    iconId: "telegram",
    viewBox: "0 0 50 50",
    width: "50px",
    height: "50px",
    href: "https://telegram.org/"
  },

  {
    iconId: "instagram",
    viewBox: "0 0 50 50",
    width: "50px",
    height: "50px",
    href: "https://www.instagram.com/"
  },

  {
    iconId: "whatsapp",
    viewBox: "-3 0 50 50",
    width: "50px",
    height: "50px",
    href: "https://www.whatsapp.com/?lang=ru"
  },

  {
    iconId: "linked",
    viewBox: "0 0 50 50",
    width: "50px",
    height: "50px",
    href: "https://www.linkedin.com/"
  },
]

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction="column" align="center">
        <S.Name>Victor Rudzko</S.Name>
        <S.SocialList>

              {SocialData.map((l, index) => {
                return (
                  <S.SocialItem>
                    <S.SocialLink href={l.href} target="_blank">
                      <Icon key={index}
                            iconId={l.iconId}
                            viewBox={l.viewBox} 
                            width={l.width} 
                            height={l.height}/>
                    </S.SocialLink>
                  </S.SocialItem>
                )
              })}

        </S.SocialList>
        <S.Copyright>@ 2024 Victor Rudzko, All Rights Reserved</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  )
}