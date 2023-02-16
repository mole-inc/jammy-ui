import React, { ReactNode } from 'react'
import { COLOR, COLOR_TYPE } from '../../constants/color'
import { FONT_SIZE, FONT_SIZE_TYPE } from '../../constants/fontSize'
import { FONT_WEIGHT, FONT_WEIGHT_TYPE } from '../../constants/fontWeight'
import { LINE_HEIGHT, LINE_HEIGHT_TYPE } from '../../constants/lineHeight'
import style from './style.module.css'

type Props = {
  children: ReactNode
  color?: COLOR_TYPE
  size?: FONT_SIZE_TYPE
  weight?: FONT_WEIGHT_TYPE
  lineHeight?: LINE_HEIGHT_TYPE
}

const Inline = ({ children, color, size, weight, lineHeight }: Props) => {
  const styleVar = {
    color: color ? COLOR[color] : COLOR['BODY'],
    fontSize: size ? FONT_SIZE[size] : FONT_SIZE['M'],
    fontWeight: weight ? FONT_WEIGHT[weight] : FONT_WEIGHT['M'],
    lineHeight: lineHeight ? LINE_HEIGHT[lineHeight] : LINE_HEIGHT['TEXT'],
  }

  return (
    <span className={style.Text} style={styleVar}>
      {children}
    </span>
  )
}

export type { Props as InlineProps }
export { Inline }
