// Terms page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import TermsPage from '../components/TermsPage'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Terms = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO
        pathname={`/terms`}
        title={`Terms of Service | ${site.titleShort}`}
      />
      <TermsPage />
    </>
  )
}

export default Terms
