// Hero Component:

// ___________________________________________________________________

import React from 'react'

// Styles + Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text } from '../../ui'

// Compoonents
import ImgMatch from '../../ImgMatch'

// ___________________________________________________________________

const PageTitle = () => {
  return (
    <>
      <S.PageTitle>
        <Flex px={theme.gutter.axis} className="hero__inner">
          <Flex width={[1, 6 / 10, 1 / 2]} className="hero__message">
            <Box>
              <Text as="h4" mb={[3, 4]}>
                {data.title}
              </Text>
              <h1
                dangerouslySetInnerHTML={{ __html: data.headline }}
                className="text--xl"
              />
            </Box>

            <Flex className="hero__features">
              <Flex className="feature-set">
                <Text
                  as="p"
                  mr={[0, 6, 10]}
                  mb={[5, 0, 0]}
                  dangerouslySetInnerHTML={{ __html: data.featureA }}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </S.PageTitle>
    </>
  )
}

export default PageTitle

const data = {
  title: 'eOn multi-surface HOCl.',
  headline: 'Clean, deoderize, and disinfect your environment—on the go.',
  featureA: '',
  featureC:
    'Derived from naturally occuring salt minerals and water. Effective on <mark>99.9%</mark> of bacteria and viruses.'
}
