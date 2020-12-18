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

// ___________________________________________________________________

const Mission = () => {
  return (
    <Layout>
      <SEO pathname={`/mission`} title={`Our Mission | eOn mist™`} />
      <MissionPage />
    </Layout>
  )
}

export default Mission
