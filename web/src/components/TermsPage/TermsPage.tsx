// TermsPage:
// https://codesandbox.io/s/termly-embed-policy-in-react-ir374?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.js

// ___________________________________________________________________

import React, { useEffect, useState } from 'react'

import Iframe from 'react-iframe'

import { Box } from '../ui'

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

const TermsPage = () => {
  const data = useLegal()
  const page = data.terms
  // const [loading, stillLoading] = useState<boolean>()

  // useEffect(() => {
  //   const d = document
  //   const s = 'script'
  //   const id = 'termly-jssdk'
  //   let js
  //   const tjs: any = d.getElementsByTagName(s)[0]
  //   if (d.getElementById(id)) return
  //   js = d.createElement(s)
  //   js.id = id
  //   // uncommenting the below line after you replace with the policy UUID.
  //   js.src = 'https://app.termly.io/embed-policy.min.js'
  //   tjs.parentNode.insertBefore(js, tjs)

  //   console.log('onMount')
  // })
  // console.log(loading)
  return (
    <>
      <S.TermsPage>
        <Section>
          {/* <Heading as="h1">Terms of Service</Heading> */}
          {/* <div
            className="terms"
            name="termly-embed"
            // Replace data-id with your policy uuid
            data-id="03977565-0b35-498f-a368-72d2cf0a3e8e"
            data-type="iframe"
          /> */}
          {/* <Iframe
          url="https://app.termly.io/embed/terms-of-use/03977565-0b35-498f-a368-72d2cf0a3e8e"
          position="relative"
          width="100%"
          id="03977565-0b35-498f-a368-72d2cf0a3e8e"
          // className="Iframe-iframe-3b2832"
          height="600px"
          frameBorder={0}
        /> */}

          {page._rawBody && <BlockContent blocks={page._rawBody || []} />}
        </Section>
      </S.TermsPage>
    </>
  )
}

export default TermsPage
