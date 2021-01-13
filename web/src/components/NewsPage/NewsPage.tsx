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
      <PageTitle
        message="News and Press"
        image="pt-q1.jpg"
        altText="eOn hand holding a can"
      />

      <S.NewsPage>
        <Section maxWidth={theme.maxWidth}>
          <Grid columns={[1, 3]} gap={[6, 7, 7]}>
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
