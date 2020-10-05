// 404 Page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Theme + ui
import { Box } from '../components/ui'
import theme from '../../config/theme'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'

// ___________________________________________________________________

const fourofourPage = () => {
  return (
    <Layout>
      <SEO />
      <Box px={[4, 7]} py={[8, 10]}>
        <h1>404</h1>
        <p>This is not the droid you are looking for 👋</p>
      </Box>
    </Layout>
  )
}

export default fourofourPage

// ___________________________________________________________________
