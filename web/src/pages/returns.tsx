// Returns page

// ___________________________________________________________________

// Libraries
import React from 'react'

import loadable from '@loadable/component'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const ReturnsPage = loadable(() => import('../components/ReturnsPage'))

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
