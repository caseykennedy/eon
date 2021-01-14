// Article template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from '../../../components/ui'

// Components
import Button from '../../../components/ui/Button'
import Pill from '../../../components/ui/Pill'
import Layout from '../../../components/Layout'
import SEO from '../../../components/SEO'
import Section from '../../../components/Section'
import BlockContent from '../../../components/BlockContent'
import Icon from '../../../components/Icons'
import PostMeta from '../../../components/PostMeta'
import PrevNext from '../PrevNext'

// Data
import usePost from '../../../hooks/usePost'
import useSiteSettings from '../../../hooks/useSiteSettings'

// ___________________________________________________________________

const Article: React.FC<PostContextShape> = ({ pageContext }) => {
  const post = pageContext.post
  const posts = usePost()
  const siteSettings = useSiteSettings()
  return (
    <Layout>
      <SEO
        article={true}
        banner={`${post.figure.asset.fluid.src}`}
        pathname={`/news/${post.slug.current}`}
        title={`${post.title} | ${siteSettings.titleShort}`}
        desc={`${post.title} | ${siteSettings.titleShort}`}
      />

      <Section maxWidth={910}>
        <Box width={1} mb={5}>
          <Heading as="h1" className="">
            {post.title}
          </Heading>

          <Box flex={1} mb={4}>
            <PostMeta
              authors={post.authors}
              categories={post.categories}
              publishedAt={post.publishedAt}
            />
          </Box>
        </Box>

        <Flex flexDirection="column">
          <Box mb={6}>
            {post.figure && (
              <>
                <Img
                  fluid={{
                    ...post.figure.asset.fluid,
                    aspectRatio: 16 / 9
                  }}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.figure.alt}
                  className="article__img"
                />
                {post.figure.caption && (
                  <Text color="tertiary" fontSize={0} mt={2}>
                    {post.figure.caption}
                  </Text>
                )}
              </>
            )}
          </Box>

          <Flex flexDirection={[`column`, `row`]}>
            <Box flex={[1, 2]}>
              {post._rawBody && <BlockContent blocks={post._rawBody || []} />}

              <Box mt={6}>
                {post.tags && (
                  <Flex mb={4} width={1}>
                    {post.tags.map((item, idx) => (
                      <Pill key={idx}>
                        <span>#{item.tag}</span>
                      </Pill>
                    ))}
                  </Flex>
                )}
              </Box>
            </Box>
          </Flex>

          {post.sources[0] && (
            <S.Sources>
              <Box flex={1}>
                <Text as="p">Sources</Text>
                <Box width={1}>
                  {post.sources.map((source, idx) => (
                    <Box key={idx}>
                      <Heading as="h5" fontWeight={500}>{source.title}</Heading>
                      <Text as="a" href={source.url} target="_blank">
                        {source.url}
                      </Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            </S.Sources>
          )}
        </Flex>
        
        <PrevNext pageContext={pageContext} />
      </Section>
    </Layout>
  )
}

export default Article

// ___________________________________________________________________
