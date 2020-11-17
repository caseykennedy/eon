// InstagramFeed Section:

// ___________________________________________________________________

import React, { useState } from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { Grid } from 'theme-ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text } from '../../ui'

// Hooks
import useInstagram from '../../../hooks/useInstagram'

// Components
import Lightbox from '../../Lightbox'

// ___________________________________________________________________

const InstagramFeed = () => {
  const feed = useInstagram()

  // Map gallery images
  const feedImages = feed.map(({ node: img }) => img.figure.asset.fluid.src)

  // Toggle and set index for lightbox
  const [isOpen, setOpen] = useState(false)
  const [currentImageIndex, setCurrentIndex] = useState(0)
  return (
    <S.InstagramFeed bg="white">
      <Box mb={[6, 6, 7]} pl={theme.gutter.axis}>
        <Text as="p">
          Get social with us
          <br />
          <Box
            as="a"
            color="gray"
            href="https://www.instagram.com/eonmist/"
            target="_blank"
          >
            @eonmist
          </Box>
        </Text>
      </Box>

      <Grid columns={[3, 6, 3]} gap={0} className="ig-feed-grid">
        {feed.slice(0, 3).map(({ node: shot }, idx) => (
          <Flex
            className="ig-feed-grid__cell"
            onClick={() => {
              setCurrentIndex(idx)
              setOpen(true)
            }}
            key={idx}
          >
            <Img
              fluid={shot.figure.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={shot.figure.alt}
            />
          </Flex>
        ))}
      </Grid>

      <Box>
        {/* <button type="button" onClick={() => setOpen(true)}>
          Open Lightbox
        </button> */}
        <Lightbox
          currentImageIndex={currentImageIndex}
          setCurrentIndex={setCurrentIndex}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          images={feedImages}
        />
      </Box>
    </S.InstagramFeed>
  )
}

export default InstagramFeed
