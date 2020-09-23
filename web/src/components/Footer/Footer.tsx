// Footer:

// ___________________________________________________________________

import * as React from 'react'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Year = () => {
  return new Date().getFullYear()
}

const Footer: React.FC = () => {
  return (
    <>
      <S.Footer as="footer" p={5} bg="black" color="white">
        Footer {Year()}
      </S.Footer>
    </>
  )
}

export default Footer
