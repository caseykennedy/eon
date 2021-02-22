// 404 Page

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import { Box } from '../components/ui'
import theme from '../gatsby-plugin-theme-ui'

import SEO from '../components/SEO'

// ___________________________________________________________________

const fourofourPage = () => {
  return (
    <>
      <SEO />
      <Box px={[4, 7]} py={[8, 10]}>
        <h1>404</h1>
        <p>This is not the droid you are looking for 👋</p>
      </Box>
    </>
  )
}

export default fourofourPage

// ___________________________________________________________________
