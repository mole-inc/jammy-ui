import React, { ReactNode } from 'react'
import { COLOR, COLOR_TYPE } from '../../constants/color'
import { FONT_SIZE, FONT_SIZE_TYPE } from '../../constants/fontSize'
import { FONT_WEIGHT, FONT_WEIGHT_TYPE } from '../../constants/fontWeight'
import style from './style.module.css'

type Props = {
  inline?: boolean
  children: ReactNode
  color?: COLOR_TYPE
  size?: FONT_SIZE_TYPE
  weight?: FONT_WEIGHT_TYPE
}

const Text = ({ children, color, size, weight, inline }: Props) => {
  if (!inline) {
    return (
      <div
        className={style.Text}
        style={{
          color: color ? COLOR[color] : COLOR['BODY'],
          fontSize: size ? FONT_SIZE[size] : FONT_SIZE['M'],
          fontWeight: weight ? FONT_WEIGHT[weight] : FONT_WEIGHT['medium'],
        }}
      >
        {children}
      </div>
    )
  }
  return (
    <span
      className={style.Text}
      style={{
        color: color ? COLOR[color] : COLOR['BODY'],
        fontSize: size ? FONT_SIZE[size] : FONT_SIZE['M'],
        fontWeight: weight ? FONT_WEIGHT[weight] : FONT_WEIGHT['medium'],
      }}
    >
      {children}
    </span>
  )
}

export type { Props as TextProps }
export { Text }
