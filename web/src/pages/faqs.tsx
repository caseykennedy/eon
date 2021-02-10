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

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Faqs = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO
        pathname={`/faqs`}
        title={`FAQs | ${site.titleShort}`}
      />
      <FaqsPage />
    </>
  )
}

export default Faqs
