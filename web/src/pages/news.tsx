// News page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import NewsPage from '../templates/NewsPage'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const News = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/news`} title={`News & Press | ${site.titleShort}`} />
      <NewsPage />
    </>
  )
}

export default News
