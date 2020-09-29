// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomePage from '../components/HomePage'

// Theme
import theme from '../../config/theme'

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
