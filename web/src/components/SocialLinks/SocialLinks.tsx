// SocialLinks:

// ___________________________________________________________________

import * as React from 'react'

// utils
import * as gtag from '../../utils/gtag'

import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Flex, Text } from '../ui'

import Icon from '../Icons'

// ___________________________________________________________________

type TrademarkShape = {
  alt: string
  src: any
  link: string
}

const Mark: React.FC<{ item: TrademarkShape }> = ({ item }) => {
  return (
    <a
      href={item.link}
      className="mark"
      target="_blank"
      onClick={() => {
        // e.preventDefault()
        gtag.event({
          category: 'Footer social link',
          action: 'Click',
          label: item.alt
        })
      }}
      rel="noopener"
    >
      {item.src}
    </a>
  )
}

const SocialLinks = () => {
  return (
    <S.SocialLinks>
      {data.map((item, idx) => (
        <Mark item={item} key={idx} />
      ))}
    </S.SocialLinks>
  )
}

export default SocialLinks

const data = [
  {
    alt: 'facebook',
    src: <Icon name="facebook" />,
    link: '//facebook.com/eonmist'
  },
  {
    alt: 'instagram',
    src: <Icon name="instagram" />,
    link: '//instagram.com/eonmist'
  },
  {
    alt: 'TSA logo',
    src: <Icon name="youtube" />,
    link: '//youtube.com/channel/UCSJmvd6iBksuyZpKErZwAhQ'
  }
]
