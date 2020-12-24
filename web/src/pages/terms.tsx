// Terms page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import TermsPage from '../components/TermsPage'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Terms = () => {
  const site = useSiteSettings()
  return (
    <Layout>
      <SEO
        pathname={`/terms`}
        title={`Terms of Service | ${site.titleShort}`}
      />
      <TermsPage />
    </Layout>
  )
}

export default Terms
