// Q1 page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import Q1Page from '../components/Q1Page'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Q1 = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/q2`} title={`Q2 New Products | ${site.titleShort}`} />
      <Q1Page />
    </>
  )
}

export default Q1
