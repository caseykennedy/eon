// Post Meta

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Text } from '../ui'

// ___________________________________________________________________

type MetaShape = {
  authors: {
    name: string
  }
  categories: {
    title: string
  }[]
  publishedAt: string
}

const PostMeta: React.FC<MetaShape> = ({
  authors,
  categories,
  publishedAt
}) => {
  let pillColor
  if (categories[0].title === 'Press') {
    pillColor = theme.colors.quinary
  }

  return (
    <Meta className="text--small">
      <Text as="span" mb={0} className="text--uppercase">
        {publishedAt}
      </Text>
      posted in <Link to={``}>{categories && categories[0].title}</Link>
    </Meta>
  )
}

export default PostMeta

// ___________________________________________________________________

PostMeta.defaultProps = {}

const Meta = styled.p`
  margin-bottom: 0;

  a {
    background: ${theme.colors.primary};
    border-radius: 2px;

    color: ${theme.colors.white};
    font-weight: 500;

    padding: 0 ${theme.space[1]};
  }
`
