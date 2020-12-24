// Returns page

// ___________________________________________________________________

// Libraries
import React from 'react'

import loadable from '@loadable/component'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
// import ReturnsPage from '../components/ReturnsPage'

const ReturnsPage = loadable(() => import('../components/ReturnsPage'))

// Theme
import theme from '../gatsby-plugin-theme-ui'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Returns = () => {
  const site = useSiteSettings()
  return (
    <Layout>
      <SEO
        pathname={`/returns`}
        title={`Returns | ${site.titleShort}`}
      />
      <ReturnsPage />
    </Layout>
  )
}

export default Returns
