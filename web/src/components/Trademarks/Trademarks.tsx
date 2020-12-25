// Trademarks:

// ___________________________________________________________________

import * as React from 'react'

import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

import { Flex, Text } from '../ui'

import Icon from '../Icons'

import fdaMark from './svg/fda-registered.svg'
import tsaMark from './svg/tsa-friendly.svg'
import usaMark from './svg/usa-made.svg'
import epaMark from './svg/epa-registered.svg'

// ___________________________________________________________________

type TrademarkShape = {
  alt: string
  src: string
  title?: string
}

const Mark: React.FC<{ item: TrademarkShape }> = ({ item }) => {
  return (
    <Flex flex={1} className="mark">
      <img src={item.src} width="100%" alt={item.alt} />
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
    alt: 'EPA logo',
    src: epaMark,
    title: 'EPA Registered'
  },
  {
    alt: 'FDA logo',
    src: fdaMark,
    title: 'FDA Registered'
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
