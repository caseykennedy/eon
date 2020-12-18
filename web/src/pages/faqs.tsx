// Faqs page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import FaqsPage from '../components/FaqsPage'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const Faqs = () => {
  return (
    <Layout>
      <SEO pathname={`/faqs`} title={`FAQs | eOn mist™`} />
      <FaqsPage />
    </Layout>
  )
}

export default Faqs
