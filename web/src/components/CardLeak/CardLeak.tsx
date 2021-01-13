// Card Leak

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

// ___________________________________________________________________

type Props = {
  aspectRatio?: number
  bg?: any
  inline?: boolean
  post: PostQuery
  small?: boolean
  video?: boolean
}

const CardLeak: React.FC<Props> = ({
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
            <Link
              to={`/${pagePrefix}/${post.slug.current && post.slug.current}`}
            >
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
            </Link>
          )}
        </Box>

        <Flex width={!inline ? 1 : 2 / 3} className="content">
          <PostMeta
            authors={post.authors}
            categories={post.categories}
            publishedAt={post.publishedAt}
          />

          <Box mt={6}>
            {/* {post.tags && (
            <Flex mb={4} width={1}>
              {post.tags.slice(0, 3).map((item, idx) => (
                <Pill key={idx}>
                  <span>#{item.tag}</span>
                </Pill>
              ))}
            </Flex>
          )} */}

            <Heading as="h4">
              <Link
                to={`/${pagePrefix}/${post.slug.current && post.slug.current}`}
              >
                {post.title && post.title}
              </Link>
            </Heading>

            <Box color="darkgray" fontSize={2}>
              read more
            </Box>

            {/* <Box color="darkgray" fontSize={1} mb={6}>
            {post._rawExcerpt && (
              <BlockContent blocks={post._rawExcerpt || []} />
            )}
          </Box> */}
          </Box>
        </Flex>
      </Card>
    </Link>
  )
}

export default CardLeak

// ___________________________________________________________________

CardLeak.defaultProps = {
  aspectRatio: 16 / 9,
  bg: theme.colors.background,
  small: false
}