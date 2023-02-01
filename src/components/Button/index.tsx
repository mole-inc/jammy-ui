import React, { ReactNode, useMemo } from 'react'
import { COLOR } from '../../constants/color'
import { FONT_WEIGHT } from '../../constants/fontWeight'
import { SPACING } from '../../constants/space'
import style from './style.module.css'

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
  size?: 'S' | 'M' | 'L'
}

const WIDTH = {
  S: {
    WIDTH: '80px',
    MAX_WIDTH: '80px',
  },
  M: {
    WIDTH: '160px',
    MAX_WIDTH: '160px',
  },
  L: {
    WIDTH: '100%',
    MAX_WIDTH: '320px',
  },
}

const Button = ({ fn, label, color, size }: Props) => {
  const textColor = useMemo(() => {
    if (
      color === 'ACCENT' ||
      color === 'TERTIARY' ||
      color === 'ACCENT_SECONDARY' ||
      color === 'BODY'
    ) {
      return COLOR['BRIGHT']
    }
    return COLOR['BODY']
  }, [color])

  return (
    <button
      style={{
        width: size ? WIDTH[size].WIDTH : WIDTH['M'].WIDTH,
        maxWidth: size ? WIDTH[size].MAX_WIDTH : WIDTH['M'].MAX_WIDTH,
        padding: `${SPACING['XS']}px ${SPACING['XS']}px`,
        backgroundColor: color ? COLOR[color] : COLOR['SHADE'],
        color: textColor,
        fontWeight: FONT_WEIGHT['medium'],
      }}
      className={style.Button}
      onClick={fn}
    >
      <span>{label}</span>
    </button>
  )
}

export type { Props as ButtonProps }
export { Button }
