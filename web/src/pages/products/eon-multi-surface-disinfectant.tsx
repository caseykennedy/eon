// Returns page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../../components/SEO'
import MultiSurfacePage from '../../templates/MultiSurfacePage'

// Hooks
import useSiteSettings from '../../hooks/useSiteSettings'

// ___________________________________________________________________

const Returns = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO
        pathname={'/products/eon-multi-surface-disinfectant'}
        title={`multi-surface disinfectant | Clean, disinfect & deodorize | ${site.siteName}`}
        desc={`eOn Sanitizing Mist is an EPA registered personal protection product which can rapidly neutralize easily transmitted pathogens via HOCI. eOn Sanitizing Mist Eliminates 99.9% of bacteria and viruses.`}
        product={true}
        productName={`eOn multi-surface disinfectant spray`}
        sku={`EONM001`}
        price={4.49}
      />
      <MultiSurfacePage />
    </>
  )
}

export default Returns
