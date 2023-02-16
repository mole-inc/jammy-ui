import React, { ReactNode, useMemo } from 'react'
import { COLOR } from '../../constants/color'
import { FONT_WEIGHT } from '../../constants/fontWeight'
import { SPACING } from '../../constants/space'
import { Inline } from '../Inline'
import style from './style.module.css'

const WIDTH = {
  S: {
    MAX_WIDTH: '80px',
  },
  M: {
    MAX_WIDTH: '160px',
  },
  L: {
    MAX_WIDTH: '320px',
  },
}

type Props = {
  fn: () => void
  label: ReactNode
  color?: keyof Pick<
    typeof COLOR,
    | 'SHADE'
    | 'ACCENT'
    | 'TERTIARY'
    | 'ACCENT_SECONDARY'
    | 'BODY'
    | 'DISABLED'
    | 'BRIGHT'
    | 'DANGER'
  >
  size?: keyof typeof WIDTH
}

const Button = ({ fn, label, color, size }: Props) => {
  const styleVar = {
    width: '100%',
    maxWidth: size ? WIDTH[size].MAX_WIDTH : WIDTH['M'].MAX_WIDTH,
    padding: `${SPACING['XS']}px ${SPACING['XS']}px`,
    backgroundColor: color ? COLOR[color] : COLOR['SHADE'],
    color:
      color === 'ACCENT' ||
      color === 'TERTIARY' ||
      color === 'ACCENT_SECONDARY' ||
      color === 'BODY'
        ? COLOR['BRIGHT']
        : COLOR['BODY'],
  }

  return (
    <button style={styleVar} className={style.Button} onClick={fn}>
      <Inline weight="M">{label}</Inline>
    </button>
  )
}

export type { Props as ButtonProps }
export { Button }
