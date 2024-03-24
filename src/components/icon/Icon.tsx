import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={props.width || "65px"} height={props.height || "75px"} viewBox={props.viewBox || "0 0 140px 100px"} >
      <use xlinkHref={ `${iconsSprite}#${props.iconId}`} />
    </svg>
  )
}

