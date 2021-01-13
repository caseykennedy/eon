// Q1 Page:

// ___________________________________________________________________

import React from 'react'
import { Grid } from 'theme-ui'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'

// Components
import PageTitle from '../PageTitle'
import Section from '../Section'
import CardLeak from '../CardLeak'

import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const NewsPage = () => {
  const posts = usePost()
  console.log(posts)
  return (
    <>
      <S.PageTitle>
        <Section maxWidth={theme.maxWidth}>
          <Box width={[1, 2 / 3, 1 / 2]}>
            <Heading as="h4" mb={0}>News and Press</Heading>
          </Box>
        </Section>
      </S.PageTitle>

      <S.NewsPage>
        <Section maxWidth={theme.maxWidth} border={true}>
          <Grid columns={[1, 2]} gap={[6]}>
            {posts.map(({ node: post }, idx) => (
              <Flex key={idx}>
                <CardLeak post={post} small={true} />
              </Flex>
            ))}
          </Grid>
        </Section>
      </S.NewsPage>
    </>
  )
}

export default NewsPage
