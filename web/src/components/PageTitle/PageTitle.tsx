// PageTitle Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { useSpring, config } from 'react-spring'
import { Parallax } from 'react-scroll-parallax'

import ImgMatch from '../ImgMatch'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {
  altText: string
  image?: string | object
  message: string
  title?: string
}

const PageTitle: React.FC<Props> = ({ altText, image, message, title }) => {
  const fadeAnimation = useSpring({
    config: config.molasses,
    delay: 260,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <>
      <S.PageTitle>
        {image && (
          <div className="figure">
            <ImgMatch src={image} altText={altText} />
          </div>
          // <Img
          //   fluid={image}
          //   objectFit="cover"
          //   objectPosition="50% 50%"
          //   alt={altText}
          // />
        )}

        <S.Billboard>
          <AnimatedBox style={fadeAnimation}>
            {title && (
              <Heading as="h5">
                {title}
              </Heading>
            )}

            <Heading
              as="h3"
              color="white"
              mb={0}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          </AnimatedBox>
        </S.Billboard>
      </S.PageTitle>
    </>
  )
}

export default PageTitle
