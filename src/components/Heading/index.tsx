import React, { ReactNode } from 'react'
import { COLOR_TYPE } from '../../constants/color'
import { Inline } from '../Inline'
import style from './style.module.css'

type Props = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  color?: COLOR_TYPE
}

const Heading = ({ tag, children, color }: Props) => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={style.Heading}>
          <Inline size="3XL" color={color ? color : 'BODY'} weight="B">
            {children}
          </Inline>
        </h1>
      )
    case 'h2':
      return (
        <h2 className={style.Heading}>
          <Inline size="2XL" color={color ? color : 'BODY'} weight="B">
            {children}
          </Inline>
        </h2>
      )
    case 'h3':
      return (
        <h3 className={style.Heading}>
          <Inline size="XL" color={color ? color : 'BODY'} weight="B">
            {children}
          </Inline>
        </h3>
      )
    case 'h4':
      return (
        <h4 className={style.Heading}>
          <Inline size="L" color={color ? color : 'BODY'} weight="B">
            {children}
          </Inline>
        </h4>
      )
    case 'h5':
      return (
        <h5 className={style.Heading}>
          <Inline size="M" color={color ? color : 'BODY'} weight="B">
            {children}
          </Inline>
        </h5>
      )
    case 'h6':
      return (
        <h6 className={style.Heading}>
          <Inline size="S" color={color ? color : 'BODY'} weight="B">
            {children}
          </Inline>
        </h6>
      )
  }
}

export type { Props as HeadingProps }
export { Heading }
