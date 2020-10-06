// Billboard:

// ___________________________________________________________________

import * as React from 'react'
import theme from '../../../config/theme'
import * as S from './styles.scss'

import Button from '../ui/Button'
import { Text, Flex, Box } from '../ui'

// ___________________________________________________________________

const Billboard: React.FC = () => {
  return (
    <S.Billboard>
      <Flex alignItems="center">
        <Box width={1 / 2}>
          <h3 className="text--xxl">
            Effective
            <br />
            on 99.99%
            <br />
            of germs
          </h3>
          <Text as="h4">
            Continuous spray,
            <br /> antimicrobial sanitation.
            <br /> Smarter, better, faster.
          </Text>
        </Box>
        <Box width={1 / 2}>
          <Button>Buy Now</Button>
        </Box>
      </Flex>
    </S.Billboard>
  )
}

export default Billboard
