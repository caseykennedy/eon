// HomePage:

// ___________________________________________________________________

import React from 'react'

import { Box } from 'theme-ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.HomePage p={5}>
      <Box color="primary">Professional-grade hand sanitation, made easy.</Box>
    </S.HomePage>
  )
}

export default HomePage
