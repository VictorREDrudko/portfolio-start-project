// СОЗДАЕМ МИКСИН

import { Theme } from "./Theme"

type FontPropsType = {
  family?: string,
  weight?: number,
  color?: string,
  lineHeigth?: number,
  Fmax?: number,
  Fmin?: number,
}

export const Font = ({family, weight, color, lineHeigth, Fmax, Fmin}: FontPropsType) => `
  font-family: ${family || "Crimson Text"};
  font-weight: ${weight || 400};
  color: ${color || Theme.colors.font};
  line-heigth: ${lineHeigth || 1.2};
  // отзывчивый шрифт
  font-size: calc( (100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`