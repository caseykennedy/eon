// Button:

// ___________________________________________________________________

// Core
import * as React from 'react'
import { Link } from 'gatsby'

import Icon from '../../Icons'

import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  children?: React.ReactNode
  invert?: boolean
} & typeof defaultProps

const defaultProps = {
  to: '/'
}

const Button: React.FC<Props> = ({ children, to, invert }) => {
  return (
    <Link to={to}>
      <S.Btn invert={invert}>
        {children}
      </S.Btn>
    </Link>
  )
}

export default Button

// ___________________________________________________________________

Button.defaultProps = defaultProps
