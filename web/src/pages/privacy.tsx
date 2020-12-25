// Privacy page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PrivacyPage from '../components/PrivacyPage'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Privacy = () => {
  const site = useSiteSettings()
  return (
    <Layout>
      <SEO
        pathname={`/privacy`}
        title={`Privacy Policy | ${site.titleShort}`}
      />
      <PrivacyPage />
    </Layout>
  )
}

export default Privacy
