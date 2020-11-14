// PrivacyPage:

// ___________________________________________________________________

import React, { useEffect } from 'react'

import { Heading, Flex } from '../ui'
import Button from '../ui/Button'

import Section from '../Section'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Sections

// ___________________________________________________________________

// trigger window resize event by munaully
const resize = () => {
  const event = document.createEvent('Event')
  event.initEvent('resize', true, true)
  window.dispatchEvent(event)
}

const PrivacyPage = () => {
  useEffect(() => {
    const d = document
    const s = 'script'
    const id = 'termly-jssdk'
    let js
    const tjs: any = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) return
    js = d.createElement(s)
    js.id = id
    // uncommenting the below line after you replace with the policy UUID.
    js.src = 'https://app.termly.io/embed-policy.min.js'
    tjs.parentNode.insertBefore(js, tjs)

    // or trigger window resize event by setTimeout
    setTimeout(() => {
      resize()
    }, 10)
  }, [])
  return (
    <S.PrivacyPage>
      <Section>
        {/* <Heading as="h1">Privacy Policy</Heading> */}
        <div
          className="policy"
          name="termly-embed"
          // Replace data-id with your policy uuid
          data-id="03977565-0b35-498f-a368-72d2cf0a3e8e"
          data-type="iframe"
        />
      </Section>
    </S.PrivacyPage>
  )
}

export default PrivacyPage
