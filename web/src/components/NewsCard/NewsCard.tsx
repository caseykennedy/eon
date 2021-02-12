// News Card

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'
import Pill from '../ui/Pill'
import Card from '../ui/Card'
import PostMeta from '../PostMeta'
import BlockContent from '../BlockContent'
import { PostQuery } from '@/types'

// ___________________________________________________________________

type Props = {
  aspectRatio?: number
  bg?: any
  inline?: boolean
  post: PostQuery
  small?: boolean
  video?: boolean
}

const NewsCard: React.FC<Props> = ({
  aspectRatio,
  bg,
  inline,
  post,
  small
}) => {
  const pagePrefix = `news`
  return (
    <Link to={`/${pagePrefix}/${post.slug.current && post.slug.current}`}>
      <Card>
        <Box width={1}>
          {post.figure && (
            <Box style={{ overflow: 'hidden' }}>
              <Box className="figure">
                <Img
                  fluid={{
                    ...post.figure.asset.fluid,
                    aspectRatio: `${aspectRatio}`
                  }}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.title}
                />
              </Box>
            </Box>
          )}
        </Box>

        <Flex width={1} className="content">
          <Box>
            <Box mb={2}>
              <PostMeta
                authors={post.authors}
                categories={post.categories}
                publishedAt={post.publishedAt}
              />
            </Box>

            <Heading as="h4" fontWeight={500}>
              {post.title && post.title}
            </Heading>

            <Box color="darkgray" fontSize={1} mb={6} className="excerpt">
              {post._rawExcerpt && (
                <BlockContent blocks={post._rawExcerpt || []} />
              )}
            </Box>
          </Box>
          {post.categories && (
            <Flex>
              <Pill bg={theme.colors.lightgray} color={theme.colors.text}>
                {post.categories[0].title}
              </Pill>
            </Flex>
          )}
        </Flex>
      </Card>
    </Link>
  )
}

export default NewsCard

// ___________________________________________________________________

NewsCard.defaultProps = {
  aspectRatio: 16 / 9,
  bg: theme.colors.background,
  small: false
}
