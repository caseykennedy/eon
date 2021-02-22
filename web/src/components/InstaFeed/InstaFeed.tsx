// InstaFeed:

// ___________________________________________________________________

import * as React from 'react'
import Img from 'gatsby-image/withIEPolyfill'

import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Text } from '../ui'
import { Grid } from 'theme-ui'

import useInstagram from '../../hooks/useInstagram'

// ___________________________________________________________________

const InstaFeed = () => {
  const igPosts = useInstagram()

  return (
    <S.InstaFeed>
      <Grid columns={[1, 3]} gap={[1, 2]}>
        {igPosts.slice(0, 3).map(({ node: post }, idx) => (
          <Box className="post" key={idx}>
            <Box className="caption">
              <Text as="p" fontWeight={600}>{post.timestamp}</Text>
              <Text as="p">{post.caption}</Text>
            </Box>
            <Img
              fluid={post.localImage.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={post.caption}
              className="img"
            />
          </Box>
        ))}
      </Grid>
    </S.InstaFeed>
  )
}

export default InstaFeed
