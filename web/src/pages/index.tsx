// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Announcement from '../components/Layout/Announcement'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomePage from '../components/HomePage'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const Index = () => {
  return (
    <Layout>
      <SEO />
      <HomePage />
    </Layout>
  )
}

export default Index
