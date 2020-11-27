// ReturnsPage:

// ___________________________________________________________________

import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'

import Section from '../Section'

// Hooks
import useLegal from '../../hooks/useLegal'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// ui
import { Box } from '../ui'

// Components
import BlockContent from '../BlockContent'

// ___________________________________________________________________

// trigger window resize event by munaully
const resize = () => {
  const event = document.createEvent('Event')
  event.initEvent('resize', true, true)
  window.dispatchEvent(event)
}

const ReturnsPage = () => {
  const data = useLegal()
  const page = data.returns
  return (
    <>
      <S.ReturnsPage>
        <Section>
          {/* <Heading as="h1">Returns</Heading> */}
          {/* <div
            className="returns"
            name="termly-embed"
            // Replace data-id with your policy uuid
            data-id="249bbfab-7a0c-4db2-9994-b7b3b7cc50ce"
            data-type="iframe"
          /> */}

          {page._rawBody && <BlockContent blocks={page._rawBody || []} />}
        </Section>
      </S.ReturnsPage>
    </>
  )
}

export default ReturnsPage
