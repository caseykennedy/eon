// Privacy page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import MissionPage from '../components/MissionPage'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Mission = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/mission`} title={`Our Mission | ${site.titleShort}`} />
      <MissionPage />
    </>
  )
}

export default Mission
