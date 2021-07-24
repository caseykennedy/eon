// Q3 page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import Q1Page from '../components/Q1Page'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Q3 = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/q3`} title={`Q3 New Products | ${site.titleShort}`} />
      <Q1Page />
    </>
  )
}

export default Q3
