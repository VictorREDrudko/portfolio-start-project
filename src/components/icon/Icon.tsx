import styled from 'styled-components'
import iconsSprite from '../../assets/images/icons-sprite.svg'
import React from 'react'

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <Svg1 version="1.0" xmlns="http://www.w3.org/2000/svg" width={props.width || "65px"} height={props.height || "75px"} viewBox={props.viewBox || "0 0 140px 100px"} >
      <use xlinkHref={ `${iconsSprite}#${props.iconId}`} />
    </Svg1>
  )
}

const Svg1 = styled.svg`
   transition: 0.5s all;
   transform: scale(1);

   &:hover {
    transition: 0.5s all;
    transform: scale(1.1);
   }
`

