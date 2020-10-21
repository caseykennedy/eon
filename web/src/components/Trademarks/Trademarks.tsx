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
import ethylMark from './svg/ethyl-alc.svg'

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
    <S.Trademarks>
      {data.map((item, idx) => (
        <Mark item={item} key={idx} />
      ))}
    </S.Trademarks>
  )
}

export default Trademarks

const data = [
  {
    alt: '80% ethyl alcohol',
    src: ethylMark,
    title: '80% Ethyl Alcohol'
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
