// Returns page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import MultiSurfacePage from '../components/MultiSurfacePage'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const Returns = () => {
  return (
    <Layout>
      <SEO
        pathname={`/eon-multi-surface/`}
        title={`eOn multi-surface disinfectant | eOn mist™`}
        desc={`eOn Sanitizing Mist is an EPA registered personal protection product which can rapidly neutralize easily transmitted pathogens via HOCI. eOn Sanitizing Mist Eliminates 99.9% of bacteria and viruses. Spray on surfaces you come in contact with. Hypochlorous acid (HOCI) is one of the most effective known biocides produced by the human immune system. HOCI is now used in healthcare, food safety, water treatment, and general sanitation world-wide. HOCI’s chlorine based odor does not linger and rapidly dissipates.`}
        individual={true}
      />
      <MultiSurfacePage />
    </Layout>
  )
}

export default Returns
