// PrivacyPage:

// ___________________________________________________________________

import React, { useEffect } from 'react'

import { Box } from '../ui'
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

// trigger window resize event by munaully
const resize = () => {
  const event = document.createEvent('Event')
  event.initEvent('resize', true, true)
  window.dispatchEvent(event)
}

const PrivacyPage = () => {
  const data = useLegal()
  const page = data.privacy
  return (
    <S.PrivacyPage>
      <Section>
        {/* <Heading as="h1">Privacy Policy</Heading> */}
        {/* <div
          className="privacy"
          name="termly-embed"
          // Replace data-id with your policy uuid
          data-id="969bcd2a-33e6-4ed8-95d0-33e0fb193359"
          data-type="iframe"
        /> */}

        {page._rawBody && <BlockContent blocks={page._rawBody || []} />}
      </Section>
    </S.PrivacyPage>
  )
}

export default PrivacyPage
