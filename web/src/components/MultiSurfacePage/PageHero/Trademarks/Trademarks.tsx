// Trademarks:

// ___________________________________________________________________

import * as React from 'react'

import theme from '../../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

import { Flex, Text } from '../../../ui'

import Icon from '../../../Icons'

import fdaMark from './svg/fda-registered.svg'
import tsaMark from './svg/tsa-friendly.svg'
import usaMark from './svg/usa-made.svg'
import hclMark from './svg/hcl.svg'

// ___________________________________________________________________

type TrademarkShape = {
  alt: string
  src: string
  title?: string
}

const Mark: React.FC<{ item: TrademarkShape }> = ({ item }) => {
  return (
    <Flex className="mark">
      <img src={item.src} alt={item.alt} />
      <Text as="p">{item.title}</Text>
    </Flex>
  )
}

const Trademarks = () => {
  return (
    <S.Trademarks className="trademarks">
      {data.map((item, idx) => (
        <Mark item={item} key={idx} />
      ))}
    </S.Trademarks>
  )
}

export default Trademarks

const data = [
  {
    alt: 'multi-surface',
    src: hclMark,
    title: 'Hypochlorous Acid'
  },
  {
    alt: 'EPA logo',
    src: fdaMark,
    title: 'EPA Registered'
  },
  {
    alt: 'TSA logo',
    src: tsaMark,
    title: 'TSA Friendly'
  },
  {
    alt: 'USA logo',
    src: usaMark,
    title: 'Made in the USA'
  }
]
