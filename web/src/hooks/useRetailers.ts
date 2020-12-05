// useRetailers hook

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  retailers: {
    edges: {
      node: {
        id: string
        _rawDescription: string
        publishedAt: string
        logo: {
          alt: string
          asset: {
            fluid: {
              srcWebp: string
              srcSetWebp: string
              srcSet: string
              src: string
              sizes: string
              base64: string
              aspectRatio: number
            }
          }
        }
      }
    }[]
  }
}

const useRetailers = () => {
  const data = useStaticQuery<Props>(graphql`
    query RetailersQuery {
      retailers: allSanityRetailer(sort: {order: ASC, fields: publishedAt}) {
        edges {
          node {
            id
            _rawDescription
            publishedAt
            logo {
              alt
              asset {
                fluid(maxWidth: 130) {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.retailers.edges
}

export default useRetailers
