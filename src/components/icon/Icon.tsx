import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={props.width || "40px"} height={props.height || "70px"} viewBox={props.viewBox || "0 0 1188.000000 1280.000000"} preserveAspectRatio="xMidYMid meet">
      <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
    </svg>
  )
}