// useInstagram hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'
import { InstagramFeedShape } from '@/types'

// ___________________________________________________________________

const useInstagram = () => {
  const data = useStaticQuery<InstagramFeedShape>(graphql`
    query InstagramQuery {
      instagram: allInstagramContent {
        edges {
          node {
            caption
            media_url
            localImage {
              childImageSharp {
                fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.instagram.edges
}

export default useInstagram
