// Specs Section:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import { Box, Flex, Heading, Text } from '../ui'
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// SVG
import CapTwist from '../SVG/CapTwist'
import SprayHand from '../SVG/SprayHand'
import HappyHands from '../SVG/HappyHands'

import spray from './svg/spray.svg'
import wait from './svg/wait.svg'

// ___________________________________________________________________

const Specs = () => {
  return (
    <S.HowTo>
      {data.map((item, idx) => (
        <Box className="figure figure-cap" key={idx}>
          {item.figure}
          <Flex as="span" className="figure__spec">
            {item.spec}
          </Flex>
          <Text fontSize={2} className="figure__caption">
            {item.caption}
          </Text>
        </Box>
      ))}

      <Box className="figure">
        <img src={spray} />
        <Flex as="span" className="figure__spec">
          SPRAY FREELY
        </Flex>
        <Text fontSize={2} className="figure__caption">
          1—2 sec from 6—8" away
        </Text>
      </Box>

      <Box className="figure">
        <img src={wait} />
        <Flex as="span" className="figure__spec">
          WAIT until DRY
        </Flex>
        <Text fontSize={2} className="figure__caption">
          You're good to go
        </Text>
      </Box>
    </S.HowTo>
  )
}

export default Specs

// ___________________________________________________________________

const data = [
  {
    spec: 'TWIST to UNLOCK',
    figure: <CapTwist />,
    caption: 'Press down on cap end'
  }
]
