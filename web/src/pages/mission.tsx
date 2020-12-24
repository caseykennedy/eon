// Privacy page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import MissionPage from '../components/MissionPage'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Mission = () => {
  const site = useSiteSettings()
  return (
    <Layout>
      <SEO pathname={`/mission`} title={`Our Mission | ${site.titleShort}`} />
      <MissionPage />
    </Layout>
  )
}

export default Mission
