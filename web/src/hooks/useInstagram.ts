// useInstagram hook

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const useInstagram = () => {
  const data = useStaticQuery<InstagramFeedShape>(graphql`
    query InstagramQuery {
      instagram: allSanityInstagram(sort: {order: DESC, fields: publishedAt}) {
        edges {
          node {
            _rawCaption
            figure {
              alt
              asset {
                fluid(maxWidth: 300) {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
            publishedAt
            title
          }
        }
      }
    }
  `)

  return data.instagram.edges
}

export default useInstagram
