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
      retailers: allSanityRetailer(sort: {order: ASC, fields: retailer}) {
        edges {
          node {
            id
            _rawDescription
            logo {
              alt
              asset {
                fluid(maxHeight: 300) {
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
