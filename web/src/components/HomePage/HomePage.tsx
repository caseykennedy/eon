// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.HomePage p={5}>
      Professional-grade hand sanitation, made easy.
    </S.HomePage>
  )
}

export default HomePage
