// Hero Component:

// ___________________________________________________________________

import React from 'react'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

import Button from '../../ui/Button'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../ui'

// ___________________________________________________________________

type Props = {}

const Hero: React.FC<Props> = () => {
  return (
    <S.Hero>
      <div className="hero-inner">
        <Box width={[1, 8 / 10]}>
          <h1>
            eOn is professional-grade hand sanitation made easy. One quick spray
            is all it takes to know your hands are 100% clean.
          </h1>
          <p>
            Effective on
            <br />
            99.99% of <br />
            common germs
          </p>

          <p>
            Effective on
            <br />
            99.99% of <br />
            common germs
          </p>
        </Box>
        {/* <div className="hero-inner__meta">
          <Text as="p" color="tertiary">
            OCT 1, 2020 at 8:43 AM
            <br />
            Tyler Swope #BLOCKCHAIN #WATCHOUT
          </Text>
          <Button to="/">read</Button>
        </div> */}
      </div>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
