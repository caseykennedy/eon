// Q1 Page:

// ___________________________________________________________________

import React from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../components/ui'

// Components
import Section from '../../components/Section'
import Filter from './Filter'

import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const NewsPage = () => {
  const posts = usePost()
  return (
    <>
      <S.PageTitle>
        <Section maxWidth={theme.maxWidth}>
          <Box width={[1, 2 / 3, 1 / 2]}>
            <Heading as="h4" mb={0}>
              News and Press
            </Heading>
          </Box>
        </Section>
      </S.PageTitle>

      <S.NewsPage>
        <Section maxWidth={theme.maxWidth} border={true}>
          <Filter />
        </Section>
      </S.NewsPage>
    </>
  )
}

export default NewsPage
