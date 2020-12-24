// checkout page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CheckoutPage from '../components/CheckoutPage'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const checkout = () => {
  const site = useSiteSettings()
  return (
    <Layout>
      <SEO
        pathname={`/checkout`}
        title={`Checkout | ${site.titleShort}`}
        desc={`${site.description}`}
      />
      <CheckoutPage />
    </Layout>
  )
}

export default checkout
