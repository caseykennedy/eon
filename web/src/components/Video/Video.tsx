// Video

// ___________________________________________________________________

import React from 'react'

// Libraries
import ResponsiveEmbed from 'react-responsive-embed'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {
  src: string
  title: string
}

const Video: React.FC<Props> = ({ src, title }) => {
  return (
    <S.Video>
      <ResponsiveEmbed src={src} allowFullScreen={true} />
    </S.Video>
  )
}

export default Video

// ___________________________________________________________________

const defaultProps = {
  src: 'https://www.youtube.com/watch?v=twqKOKxIfPo',
  title: 'Placeholder'
}

Video.defaultProps = defaultProps
