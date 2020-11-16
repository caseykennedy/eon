// InstagramFeed Section:

// ___________________________________________________________________

import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { Grid } from 'theme-ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text } from '../../ui'

// Hooks
import useInstagram from '../../../hooks/useInstagram'

// ___________________________________________________________________

const InstagramFeed = () => {
  const feed = useInstagram()

  return (
    <S.InstagramFeed bg="white">
      <Box mb={[6, 6, 7]} pl={theme.gutter.axis}>
        <Text as="p">
          Get social with us
          <br />
          <Box color="gray">
            @eonmist
          </Box>
        </Text>
      </Box>

      <Grid columns={[3]} gap={0} p={[2, 0, 0]} className="ig-feed-grid">
        {feed.map(({ node: shot }, idx) => (
          <Flex key={idx} className="ig-feed-grid__cell">
            <Img
              fluid={shot.figure.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={shot.figure.alt}
            />
          </Flex>
        ))}
      </Grid>
    </S.InstagramFeed>
  )
}

export default InstagramFeed
