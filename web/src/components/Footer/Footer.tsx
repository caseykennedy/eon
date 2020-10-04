// Footer:

// ___________________________________________________________________

import * as React from 'react'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Footer: React.FC = () => {
  const getYear = () => new Date().getFullYear()
  return (
    <>
      <S.Footer
        as="footer"
        bg="quinary"
        px={[4, 7]}
        py={[6, 8]}
        style={{ borderTop: theme.border }}
      >
        Footer {getYear()}
      </S.Footer>
    </>
  )
}

export default Footer
