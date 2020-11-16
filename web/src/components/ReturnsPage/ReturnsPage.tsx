// ReturnsPage:

// ___________________________________________________________________

import React, { useEffect } from 'react'

import Section from '../Section'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Sections
// 249bbfab-7a0c-4db2-9994-b7b3b7cc50ce

// ___________________________________________________________________

// trigger window resize event by munaully
const resize = () => {
  const event = document.createEvent('Event')
  event.initEvent('resize', true, true)
  window.dispatchEvent(event)
}

const ReturnsPage = () => {
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
    }, 100)
  }, [])
  return (
    <S.ReturnsPage>
      <Section>
        {/* <Heading as="h1">Returns</Heading> */}
        <div
          className="policy"
          name="termly-embed"
          // Replace data-id with your policy uuid
          data-id="249bbfab-7a0c-4db2-9994-b7b3b7cc50ce"
          data-type="iframe"
        />
      </Section>
    </S.ReturnsPage>
  )
}

export default ReturnsPage
