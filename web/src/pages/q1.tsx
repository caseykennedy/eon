// Q1 page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Q1Page from '../components/Q1Page'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Q1 = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/q1`} title={`Q1 New Products | ${site.titleShort}`} />
      <Q1Page />
    </>
  )
}

export default Q1
