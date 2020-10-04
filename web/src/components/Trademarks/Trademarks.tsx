// Trademarks:

// ___________________________________________________________________

import * as React from 'react'

import theme from '../../../config/theme'
import * as S from './styles.scss'

import fdaMark from './svg/fda-registered.svg'
import tsaMark from './svg/tsa-friendly.svg'
import usaMark from './svg/usa-made.svg'

// ___________________________________________________________________

const Trademarks: React.FC = () => {
  const getYear = () => new Date().getFullYear()
  return (
    <S.Trademarks>
      <div className="mark__fda">
        <img src={fdaMark} alt="Logo" />
      </div>
      <div className="mark__tsa">
        <img src={tsaMark} alt="Logo" />
      </div>
      <div className="mark__usa">
        <img src={usaMark} alt="Logo" />
      </div>
    </S.Trademarks>
  )
}

export default Trademarks
