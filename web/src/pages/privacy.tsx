// Privacy page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import PrivacyPage from '../components/PrivacyPage'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Privacy = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO
        pathname={`/privacy`}
        title={`Privacy Policy | ${site.titleShort}`}
      />
      <PrivacyPage />
    </>
  )
}

export default Privacy
