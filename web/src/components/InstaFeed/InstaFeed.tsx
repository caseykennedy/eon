// InstaFeed:

// ___________________________________________________________________

import * as React from 'react'
import Img from 'gatsby-image/withIEPolyfill'

import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from '../ui'
import { Grid } from 'theme-ui'

import useInstagram from '../../hooks/useInstagram'

// ___________________________________________________________________

const InstaFeed = () => {
  const igPosts = useInstagram()
  console.log(igPosts)
  return (
    <Grid columns={3} gap={2}>
      {igPosts.slice(0, 3).map(({ node: post }, idx) => (
        <Box key={idx}>
          <Img
            fluid={post.localImage.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={post.caption}
            className="article__img"
          />
        </Box>
      ))}
    </Grid>
  )
}

export default InstaFeed
