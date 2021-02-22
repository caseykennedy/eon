// Faqs page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import FaqsPage from '../components/FaqsPage'

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
