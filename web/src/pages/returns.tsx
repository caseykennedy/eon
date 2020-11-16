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

// ___________________________________________________________________

const Returns = () => {
  return (
    <Layout>
      <SEO />
      <ReturnsPage />
    </Layout>
  )
}

export default Returns
