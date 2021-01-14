// Posts

// ___________________________________________________________________

import React from 'react'
import { Grid } from 'theme-ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Flex } from '../../ui'

// Components
import CardLeak from '../../CardLeak'

import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

const Posts: React.FC<{ items: PostEdges[] }> = ({ items }) => {
  // const posts = usePost()
  return (
    <Grid columns={[1, 3]} gap={[6]}>
      {items.map(({ node: post }, idx) => (
        <Flex key={idx}>
          <CardLeak post={post} small={true} />
        </Flex>
      ))}
    </Grid>
  )
}

export default Posts
