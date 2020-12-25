// Returns page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import MultiSurfacePage from '../../components/MultiSurfacePage'

// Hooks
import useSiteSettings from '../../hooks/useSiteSettings'

// ___________________________________________________________________

const Returns = () => {
  const site = useSiteSettings()
  return (
    <Layout>
      <SEO
        pathname={'/products/eon-multi-surface-disinfectant'}
        title={`eOn multi-surface disinfectant | ${site.titleShort}`}
        desc={`eOn Sanitizing Mist is an EPA registered personal protection product which can rapidly neutralize easily transmitted pathogens via HOCI. eOn Sanitizing Mist Eliminates 99.9% of bacteria and viruses. Spray on surfaces you come in contact with. Hypochlorous acid (HOCI) is one of the most effective known biocides produced by the human immune system. HOCI is now used in healthcare, food safety, water treatment, and general sanitation world-wide. HOCI’s chlorine based odor does not linger and rapidly dissipates.`}
        product={true}
        productName={`eOn multi-surface disinfectant spray`}
        sku={`EONM001`}
        price={4.49}
      />
      <MultiSurfacePage />
    </Layout>
  )
}

export default Returns
