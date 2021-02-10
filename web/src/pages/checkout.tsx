// Checkout page

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

const Checkout = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/mission`} title={`Our Mission | ${site.titleShort}`} />
      <CheckoutPage />
    </>
  )
}

export default Checkout
