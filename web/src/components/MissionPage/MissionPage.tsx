// Mission Page:

// ___________________________________________________________________

import React, { useEffect } from 'react'

import { Box, Heading } from '../ui'
import Button from '../ui/Button'

import Section from '../Section'

// Hooks
import useLegal from '../../hooks/useLegal'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Components
import BlockContent from '../BlockContent'

// ___________________________________________________________________

const MissionPage = () => {
  return (
    <S.PrivacyPage>
      <Section>
        <Heading as="h1">Mission Page</Heading>
      </Section>
    </S.PrivacyPage>
  )
}

export default MissionPage
