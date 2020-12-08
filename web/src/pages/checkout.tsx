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

// ___________________________________________________________________

const checkout = () => {
  return (
    <Layout>
      <SEO />
      <CheckoutPage />
    </Layout>
  )
}

export default checkout
