// Reviews Section:

// ___________________________________________________________________

import React from 'react'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

import { Box, Flex, Heading } from '../../ui'
import { Grid, Cell } from 'styled-css-grid'
import Section from '../../Section'

// ___________________________________________________________________

type Props = {}

const Specs: React.FC<Props> = () => {
  return (
    <S.Reviews bg="white">
      <h4>Reviews</h4>
      <br /><br />
      <h3 className="text--lg">
        I carry it in my pocket and bring it out for a quick spray when needed,
        the feeling of clean it leaves on my hands feels great and I definitely
        feel protected from taking germs to my face or bringing them back home
        to my family.
      </h3>
    </S.Reviews>
  )
}

export default Specs
